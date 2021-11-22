import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepositories from './hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce/lib';

const styles = StyleSheet.create({
    list: {
        backgroundColor: theme.light,
        paddingTop: 10,
    },
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const [sorting, setSorting] = useState();
    const [search, setSearch] = useState();
    const [searchValue] = useDebounce(search, 500);
    const {repositories, fetchMore} = useRepositories({
        orderBy: sorting ? "RATING_AVERAGE" : "CREATED_AT",
        orderDirection: sorting ? sorting : "DESC",
        searchKeyword: searchValue
    });

    const onEndReach = () => {
        fetchMore();
    };

    return (
        <>
            <Searchbar
                placeholder="Search"
                onChangeText={(query) => setSearch(query)}
                value={search}
            />
            <Picker
                selectedValue={sorting}
                onValueChange={(itemValue) =>
                    setSorting(itemValue)
                }>
                <Picker.Item label="Newest Repositories" value="" />
                <Picker.Item label="Highest Rated Repositories" value="DESC" />
                <Picker.Item label="Lowest Rated Repositories" value="ASC" />
            </Picker>
            <RepositoryListContainer repositories={repositories} 
            onEndReach={onEndReach} />
        </>
    );
};

export const RepositoryListContainer = ({repositories, onEndReach}) => {
    const navigate = useNavigate();

    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => (
                <Pressable onPress={() => navigate("/repo/" + item.id)}>
                    <RepositoryItem item={item} />
                </Pressable>
            )}
            style={styles.list}
            onEndReach={onEndReach}
            onEndReachedThreshold={0.5}
        />
    );
};

export default RepositoryList;