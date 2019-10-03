import React from 'react';
import {ApolloClient} from "apollo-client";
import {ApolloProvider} from 'react-apollo';
import {ApolloLink} from "apollo-link";
import {InMemoryCache} from "apollo-cache-inmemory";
import {createHttpLink} from "apollo-link-http";
import {setContext} from 'apollo-link-context';
import Article from './Article';

const httpLink = createHttpLink({
  uri: 'https://apollo-react-authentication.lndo.site/graphql', // Change appropriately.
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Article/>
    </ApolloProvider>
  );
}

export default App;
