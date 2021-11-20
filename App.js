
import React from 'react';
import Main from './components/Main';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './components/utils/apolloClient';
import AuthStorage from './components/utils/authStorage';
import AuthStorageContext from './components/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
        </AuthStorageContext.Provider>
      </ApolloProvider>
  );
}
