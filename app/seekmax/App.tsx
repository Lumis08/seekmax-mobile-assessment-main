import React from 'react';
import {ApolloProvider} from '@apollo/client';
import apolloClient from './src/graphql/apollo-client';
import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <RootNavigator />
    </ApolloProvider>
  );
}

export default App;
