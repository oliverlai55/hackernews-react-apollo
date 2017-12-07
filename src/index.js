import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjaukoell2doy0101b3xwvht7'})
// connect ApolloClient instance with GraphQL Api

// Instantiate ApolloClient
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// Higher Order Component ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />, document.getElementById('root')
  </ApolloProvider>
);
registerServiceWorker();
