import { Formik } from "formik";
import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { View, Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";
import FormikInput from "./FormikInput";
import { useMutation } from "@apollo/client";
import mutations from "./graphql/mutations";

const ReviewFormFields = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikInput placeholder="Repository owner name" name="ownerName" />
            <FormikInput placeholder="Repository name" name="repositoryName" />
            <FormikInput placeholder="Rating between 0 and 100" name="rating" />
            <FormikInput placeholder="Review" name="text" multiline/>
            <Pressable onPress={onSubmit}>
                <View style={styles.submit}>
                    <Text style={{color: theme.light, textAlign: "center"}}>
                        Create a review
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

const validationSchema = yup.object().shape({
    repositoryName: yup.string().required("Repository name is required"),
    ownerName: yup.string().required("Owner name is required"),
    rating: yup.number()
        .min(0, "Rating must be greater than or equal to 0")
        .max(100, "Rating must be less than or equal to 100")
        .required("Rating is required")
});

const ReviewForm = () => {
    const [sendReview] = useMutation(mutations.createReviewMutation); 
    const navigate = useNavigate();
    const initialValues = {
        repositoryName: "",
        ownerName: "",
        rating: "",
        text: ""
    };

    const onSubmit = async (values) => {
        try {
            values.rating = parseInt(values.rating);
            await sendReview({
                variables: {
                    "review": values
                }
            });
            navigate("/");
        } catch(e) {
            console.error(e);
        }
    };

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({handleSubmit}) => <ReviewFormFields onSubmit={handleSubmit} />}
      </Formik>
  );
};

export default ReviewForm;