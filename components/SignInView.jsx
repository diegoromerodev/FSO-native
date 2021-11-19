import { Formik } from "formik";
import React from "react";
import SignInForm from "./SignInForm";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
});

const SignIn = () => {

    const initialValues = {
        username: "",
        password: ""
    };

    const onSubmit = (obj) => {
        console.log(obj);
    };

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
  );
};

export default SignIn;