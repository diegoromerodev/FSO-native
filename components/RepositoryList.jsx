import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import theme from '../theme';
import RepositoryItem from './RepositoryItem';
import useRepositories from './hooks/useRepository';

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
    const {repositories} = useRepositories();


  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      style={styles.list}
    />
  );
};

export default RepositoryList;