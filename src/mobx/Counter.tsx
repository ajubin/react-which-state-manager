import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

// ----------------- COUNTER MODEL ---------------------

class CounterStore {
  @observable counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}

const store = new CounterStore();

export const Counter = observer(() => {
  const increment = () => {
    store.increment();
  };
  return <BaseCounter value={store.counter} onIncrement={increment} />;
});
