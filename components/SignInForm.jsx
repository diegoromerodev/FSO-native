import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import theme from "../theme";
import FormikInput from "./FormikInput";

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikInput name="username" />
            <FormikInput name="password" />
            <Pressable onPress={onSubmit} testID="submitSignIn">
                <View style={styles.submit}>
                    <Text style={{color: theme.light, textAlign: "center"}}>SIGN IN</Text>
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

export default SignInForm;