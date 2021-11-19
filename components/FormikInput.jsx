import { useField } from "formik";
import React from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import theme from "../theme";

const FormikInput = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;
    return (
        <>
        <TextInput placeholder={name}
            secureTextEntry={name === "password"}
            style={[styles.input, showError && styles.inputError]}
            value={field.value}
            onChangeText={(text) => helpers.setValue(text)}
            onBlur={() => helpers.setTouched(true)}
            error={showError}
            {...props}
            />
        {showError && <Text style={styles.error}>{meta.error}</Text>}
        </>
    );
};

const styles = StyleSheet.create({
    error: {
        color: theme.red
    },
    input: {
        padding: 5,
        borderColor: theme.lessDark,
        borderWidth: 1,
        borderRadius: theme.smallRadius,
        marginVertical: 5,
    },
    inputError: {
        borderColor: theme.red,
        borderWidth: 2
    }
});

export default FormikInput;