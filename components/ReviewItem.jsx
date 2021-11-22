import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import theme from "../theme";
import HeaderText from "./HeaderText";
import {format} from "date-fns";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import mutations from "./graphql/mutations";

const ReviewItem = ({ review }) => {
    const navigate = useNavigate();
    const [deleteReview] = useMutation(mutations.deleteReviewMutation,{
        variables: {
            reviewId: review.id
        }
    });

    const createDeleteAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: deleteReview }
      ]
    );

    return (
        <View style={styles.details}>
            <View style={styles.container}>
                <View style={styles.rating}>
                    <HeaderText style={styles.score} text={review.rating} />
                </View>
                <View style={{alignItems: "flex-start", flex: 1}}>
                    <Text style={styles.username}>{review.repositoryId || review.user.username}</Text>
                    <Text style={styles.date}>{format(new Date(review.createdAt), "dd.MM.u")}</Text>
                    <Text>{review.text}</Text>
                </View>
            </View>
            {review.repositoryId && (<View style={{flexDirection: "row", flex: 1}}>
                <Pressable style={{flex: 1}} onPress={() => navigate("/repo/" + review.repositoryId)}>
                    <View style={styles.submit}>
                        <Text style={{color: theme.light, textAlign: "center"}}>View repository</Text>
                    </View>
                </Pressable>
                <View style={{width: 10}} />
                <Pressable style={{flex: 1}} onPress={createDeleteAlert}>
                    <View style={[styles.submit, { backgroundColor: theme.red }]}>
                        <Text style={{color: theme.light, textAlign: "center"}}>Delete repository</Text>
                    </View>
                </Pressable>
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    details: {
        backgroundColor: theme.light,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: theme.bigRadius,
        ...theme.boxShadow,
    },
    rating: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        borderWidth: 3,
        borderColor: theme.blue,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5
    },
    score: {
        color: theme.blue
    },
    username: {
        fontWeight: "bold"
    },
    date: {
        color: theme.lessDark,
        fontSize: "14"
    },
    submit: {
        backgroundColor: theme.blue,
        padding: 5,
        borderRadius: theme.smallRadius,
        justifyContent: "center",
        flexGrow: 1
    },
});

export default ReviewItem;