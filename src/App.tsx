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

import { RecoilRoot } from 'recoil';
import { RecoilCounter } from './recoil';

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
        <Section title="Hooks - Local">
          <HooksCounter />
          <HooksCounter />
        </Section>
        <Section title="Apollo - Global">
          <ApolloProvider client={apolloClient}>
            <ApolloCounter />
            <ApolloCounter />
          </ApolloProvider>
        </Section>
        <Section title="Redux - Global">
          <ReduxProvider store={reduxStore}>
            <ReduxCounter />
            <ReduxCounter />
          </ReduxProvider>
        </Section>
        <Section title="XState - Local">
          <XStateCounter />
          <XStateCounter />
        </Section>
        <Section title="Mobx - Global">
          <MobXCounter />
          <MobXCounter />
        </Section>
        <Section title="Recoil - Global">
          <RecoilRoot>
            <RecoilCounter />
            <RecoilCounter />
          </RecoilRoot>
        </Section>
      </header>
    </div>
  );
}

export default App;
