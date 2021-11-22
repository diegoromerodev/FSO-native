import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { View, Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";
import FormikInput from "./FormikInput";
import { useMutation } from "@apollo/client";
import mutations from "./graphql/mutations";
import useSignIn from "./hooks/useSignIn";

const SignUpFormFields = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikInput placeholder="Username" name="username" />
            <FormikInput placeholder="Password" name="password" />
            <FormikInput placeholder="Password confirmation" name="passwordConfirm" />
            <Pressable onPress={onSubmit}>
                <View style={styles.submit}>
                    <Text style={{color: theme.light, textAlign: "center"}}>
                        Sign up
                    </Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    submit: {
        backgroundColor: theme.blue,
        padding: 5,
        borderRadius: theme.smallRadius,
        justifyContent: "center"
    },
    form: {
        padding: 10,
    }
});

const validationSchema = yup.object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
    passwordConfirm: yup.string()
       .oneOf([yup.ref('password'), null], "Passwords don't match")
       .required('Password confirm is required')
});

const SignUpForm = () => {
    const [createUser] = useMutation(mutations.signUpMutation);
    const navigate = useNavigate();
    const [signIn] = useSignIn();
    const initialValues = {
        username: "",
        password: "",
        passwordConfirm: "",
    };

    const onSubmit = async ({username, password}) => {
        try {
            await createUser({
                variables: {
                    "user": {
                        username,
                        password
                    }
                }
            });
            await signIn({username, password});
            navigate("/");
        } catch(e) {
            console.error(e);
        }
    };

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({handleSubmit}) => <SignUpFormFields onSubmit={handleSubmit} />}
      </Formik>
  );
};

export default SignUpForm;