import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import theme from "../theme";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    barText: {
        color: theme.light,
        fontSize: theme.headerFont
    },
    tab: {
        paddingTop: Constants.statusBarHeight + 5,
        backgroundColor: theme.dark,
        paddingHorizontal: 20,
        paddingBottom: 20,
        flex: 1,
    }
});

const AppBarTab = ({text, handlePress}) => {
    return (
        <Pressable onPress={handlePress}>
            <View style={styles.tab}>
                <Text style={styles.barText}>{text}</Text>
            </View>
        </Pressable>
    );
};

export default AppBarTab;