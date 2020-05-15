import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { useCounter } from './CounterModel';

export const Counter = () => {
  const [value, actions] = useCounter();

  return <BaseCounter value={value} onIncrement={actions.increment} onDecrement={actions.decrement} />;
};
