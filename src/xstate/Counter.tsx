import { counterMachine } from './CounterModel';
import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { useMachine } from '@xstate/react';

export const Counter = () => {
  const [state, send] = useMachine(counterMachine);
  const increment = () => send('INC');
  const decrement = () => send('DEC');

  return <BaseCounter value={state.context.count} onIncrement={increment} onDecrement={decrement} />;
};
