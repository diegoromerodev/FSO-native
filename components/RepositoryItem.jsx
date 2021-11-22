import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import theme from "../theme";
import HeaderText from "./HeaderText";
import InfoIcon from "./InfoIcon";
import {openBrowserAsync} from "expo-web-browser";


const RepositoryItem = ({item}) => {
    return (
        <View style={styles.box} testID="repoItem">
            <View style={{flexDirection: "row", alignItems: "flex-start" }}>
                <Image source={{uri: item.ownerAvatarUrl}} style={styles.avatar} />
                <View style={{alignItems: "flex-start", flex: 1}}>
                    <HeaderText text={item.fullName} />
                    <View>
                        <Text style={styles.desc}>{item.description}</Text>
                    </View>
                    <View style={[
                        styles.language,
                        styles.redBg,
                        (item.language[0] === "T" || item.language[0] === "J") && styles.blueBg
                    ]}>
                        <Text style={styles.langText} testID="language">{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.info}>
                <InfoIcon name="Forks" number={item.forksCount}/>
                <InfoIcon name="Stars" number={item.stargazersCount} />
                <InfoIcon name="Reviews" number={item.reviewCount} />
                <InfoIcon name="Rating" number={item.ratingAverage} />
            </View>
            {item.url && (<Pressable onPress={() => openBrowserAsync(item.url)} style={styles.githubLink}>
                <Text style={styles.githubLabel}>Open in GitHub</Text>
            </Pressable>)}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginHorizontal: 10,
        padding: 15,
        ...theme.boxShadow,
        backgroundColor: theme.light,
        borderRadius: theme.bigRadius,
    },
    language: {
        padding: 5,
        borderRadius: theme.smallRadius,
        alignItems: "flex-start"
    },
    langText: {
        color: theme.light
    },
    blueBg: {
        backgroundColor: theme.blue
    },
    redBg: {
        backgroundColor: theme.red
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 15,
    },
    desc: {
        fontSize: 16,
        color: theme.lessDark,
        marginVertical: 5
    },
    info: {
        flexDirection: "row",
        paddingVertical: 10
    },
    githubLink: {
        backgroundColor: theme.blue,
        borderRadius: theme.smallRadius,
        padding: theme.bigRadius
    },
    githubLabel: {
        color: theme.light,
        textAlign: "center"
    }
});

export default RepositoryItem;