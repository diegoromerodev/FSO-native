import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
    barText: {
        color: theme.light,
        fontSize: theme.headerFont
    }
});

const AppBarTab = ({text}) => {
    return (
        <Text style={styles.barText}>{text}</Text>
    );
};

export default AppBarTab;