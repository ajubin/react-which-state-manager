import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HooksCounter } from './hooks';

import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient, ApolloCounter } from './apollo';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HooksCounter />
          <ApolloCounter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </ApolloProvider>
    </div>
  );
}

export default App;
