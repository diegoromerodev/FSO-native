import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList, View } from "react-native";
import queries from "./graphql/queries";
import ReviewItem from "./ReviewItem";

const UserReviews = () => {
    const {data} = useQuery(queries.getAuthUser,{
        variables: {
            includeReviews: true
        }
    });

    if(!data) return null;

    const reviews = data.authorizedUser.reviews.edges.map(e => e.node);
    
    return (
        <FlatList
            data={reviews}
            keyExtractor={({id}) => id}
            renderItem={({item}) => <ReviewItem review={item}/>}
            ItemSeparatorComponent={() => <View style={{height: 10}}/>}
        />
    );
};

export default UserReviews;