import React from 'react';
import logo from './logo.svg';
import './App.css';

import { HooksCounter } from './hooks';

import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient, ApolloCounter } from './apollo';

import { Provider as ReduxProvider } from 'react-redux';
import { ReduxCounter, reduxStore } from './redux';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <ReduxProvider store={reduxStore}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <HooksCounter />
            <ApolloCounter />
            <ReduxCounter />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </ReduxProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
