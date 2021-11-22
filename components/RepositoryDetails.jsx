import React from "react";
import { FlatList, View } from "react-native";
import { useParams } from "react-router";
import useRepository from "./hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";

const RepositoryDetails = () => {
    const {repoId} = useParams();
    const {repository, fetchMore} = useRepository({id: repoId});
    if(!repository) return null;
    const reviews = repository.reviews.edges.map(e => e.node);

    return (
        <FlatList
            data={reviews}
            keyExtractor={({id}) => id}
            renderItem={({item}) => <ReviewItem review={item}/>}
            ItemSeparatorComponent={() => <View style={{height: 10}}/>}
            ListHeaderComponent={() => (
                <>
                    <RepositoryItem item={repository} />
                    <View style={{height: 10}}/>
                </>
            )}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.5}
        />
    );
};

export default RepositoryDetails;