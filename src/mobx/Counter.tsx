import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { observer } from 'mobx-react';
import { CounterStore } from './CounterModel';

const store = new CounterStore();

export const Counter = observer(() => {
  const increment = () => {
    store.increment();
  };
  const decrement = () => {
    store.decrement();
  };
  return <BaseCounter value={store.counter} onIncrement={increment} onDecrement={decrement} />;
});
