import React, { Component } from 'react';
import Feeds from './components/Feeds'
import Feed from './components/Feed';

import { ApolloClient } from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:5000/graphql'
})

const client = new ApolloClient({
  cache,
  link
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>

     
      <div className="container">
        <h1 style={{textAlign: 'center'}}>Adafruit I.O With GraphQL</h1>
         <Route exact path="/" component={Feeds} />
         <Route exact path="/feed/:feed_key" component={Feed} />
      </div>
      </Router>
      </ApolloProvider>
      
    );
  }
  
}

export default App;
