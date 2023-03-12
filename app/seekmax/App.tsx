import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useActiveJobs from './src/hooks/useActiveJobs';

// GraphQL
const httpLink = createHttpLink({uri: 'http://192.168.1.107:3002'});
const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  // const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  let token = null;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Navigation
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const {loading, error, data} = useActiveJobs(3, 1);

  useEffect(() => {
    console.log(JSON.stringify(data));
    console.log(loading);
    console.log(error);
    console.log('--- end of line ---');
  }, [data, loading, error]);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>isLoading: {loading ? 'true' : 'false'}</Text>
      <Text>data: {data ? JSON.stringify(data) : 'No Data'}</Text>
    </SafeAreaView>
  );
}

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
