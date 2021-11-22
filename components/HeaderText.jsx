import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const HeaderText = ({text, center, style}) => {
    return (
        <Text style={[styles.heading, center && styles.center, style]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: theme.headerFont,
        fontWeight: "600"
    },
    center: {
        textAlign: "center"
    }
});

export default HeaderText;