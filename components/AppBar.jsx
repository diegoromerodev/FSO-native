import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

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
  return (
      <View>
            <ScrollView horizontal contentContainerStyle={{width: "100%"}}>
                <View style={styles.container}>
                    <Link to="/">
                        <AppBarTab text={"Repositories"} />
                    </Link>
                    <Link to="/signIn">
                        <Text style={styles.link}>SIGN IN</Text>
                    </Link>
                </View>
            </ScrollView>
      </View>
  );
};

export default AppBar;