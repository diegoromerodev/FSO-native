import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import queries from './graphql/queries';
import useAuthStorage from './hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: theme.dark,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexShrink: 0,
  },
  link: {
    color: theme.blue,
    fontWeight: "600",
    fontFamily: theme.fontFamily
  }
});

const AppBar = () => {
  const [signed, setSigned] = useState();
  const authContext = useAuthStorage();
  const {data} = useQuery(queries.getAuthUser);
  const client = useApolloClient();

  useEffect(() => {
    if(data) {
        setSigned(data.authorizedUser);
    }
  }, [data]);

  const handleSignOut = () => {
    setSigned(false);
    authContext.removeAccessToken();
    client.resetStore();
  };

  return (
      <View>
            <ScrollView horizontal contentContainerStyle={{width: "100%"}}>
                <View style={styles.container}>
                    <Link to="/">
                        <AppBarTab text={"Repositories"} />
                    </Link>
                    {!signed ? (<Link to="/signIn">
                        <Text style={styles.link}>SIGN IN</Text>
                    </Link> ):(
                    <Pressable onPress={handleSignOut}>
                        <Text style={styles.link}>SIGN OUT</Text>
                    </Pressable>)}
                </View>
            </ScrollView>
      </View>
  );
};

export default AppBar;