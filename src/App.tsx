import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import { HooksCounter } from './hooks';

import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient, ApolloCounter } from './apollo';

import { Provider as ReduxProvider } from 'react-redux';
import { ReduxCounter, reduxStore } from './redux';

import { XStateCounter } from './xstate';
import { MobXCounter } from './mobx';

const Section: FunctionComponent<{ title: string }> = ({ title, children }) => (
  <div style={{ flexDirection: 'row', display: 'flex' }}>
    <text>{title}</text>
    <div style={{ flexDirection: 'column' }}>{children}</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Section title="Hooks">
          <HooksCounter />
        </Section>
        <Section title="Apollo">
          <ApolloProvider client={apolloClient}>
            <ApolloCounter />
          </ApolloProvider>
        </Section>
        <Section title="Redux">
          <ReduxProvider store={reduxStore}>
            <ReduxCounter />
          </ReduxProvider>
        </Section>
        <Section title="XState">
          <XStateCounter />
        </Section>
        <Section title="Mobx">
          <MobXCounter />
        </Section>
      </header>
    </div>
  );
}

export default App;
