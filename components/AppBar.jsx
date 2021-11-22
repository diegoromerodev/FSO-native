import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import { useNavigate } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';
import queries from './graphql/queries';
import useAuthStorage from './hooks/useAuthStorage';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: theme.dark
  },
});

const AppBar = () => {
  const [signed, setSigned] = useState();
  const authContext = useAuthStorage();
  const {data} = useQuery(queries.getAuthUser);
  const client = useApolloClient();
  const navigate = useNavigate();

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

  console.log(signed);

  return (
      <View>
            <ScrollView horizontal contentContainerStyle={{width: "100%"}}>
                <View style={styles.container}>
                    <AppBarTab text="Repositories" handlePress={() => navigate("/")}/>
                    {signed && <AppBarTab text="Create review" handlePress={() => navigate("/createReview")}/>}
                    {signed && <AppBarTab text="My Reviews" handlePress={() => navigate("/myReviews")}/>}
                    <AppBarTab handlePress={!signed ? () => navigate("/signIn") : handleSignOut} 
                                text={signed ? "Sign Out" : "Sign In"} />
                    {!signed && <AppBarTab text="Sign up" handlePress={() => navigate("/signUp")}/>}
                </View>
            </ScrollView>
      </View>
  );
};

export default AppBar;