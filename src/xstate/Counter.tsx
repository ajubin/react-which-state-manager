import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { useMachine } from '@xstate/react';

// ----------------- COUNTER MODEL ---------------------
import { Machine, assign } from 'xstate';

const counterContext = { count: 0 };
const increment = (context: typeof counterContext) => context.count + 1;

const counterMachine = Machine({
  initial: 'active',
  context: counterContext,
  states: {
    active: {
      on: {
        INC: { actions: assign({ count: increment }) },
      },
    },
  },
});

export const Counter = () => {
  const [state, send] = useMachine(counterMachine);
  const increment = () => send('INC');

  return <BaseCounter value={state.context.count} onIncrement={increment} />;
};
