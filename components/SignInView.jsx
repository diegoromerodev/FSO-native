import { Formik } from "formik";
import React from "react";
import SignInForm from "./SignInForm";
import * as yup from "yup";
import useSignIn from "./hooks/useSignIn";
import { useNavigate } from "react-router";

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
});

const SignIn = () => {
    const [signIn] = useSignIn();
    const navigate = useNavigate();
    const initialValues = {
        username: "",
        password: ""
    };

    const onSubmit = async ({username, password}) => {
        try {
            const {data} = await signIn({
                username,
                password
            });
            console.log(data);
            navigate("/");
        } catch(e) {
            console.error(e);
        }
    };

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
  );
};

export default SignIn;