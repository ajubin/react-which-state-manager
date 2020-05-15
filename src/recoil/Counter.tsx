import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { atom, useRecoilState } from 'recoil';

const counterState = atom({
  key: 'CounterState',
  default: 0,
});

export const Counter = () => {
  const [value, setValue] = useRecoilState(counterState);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return <BaseCounter value={value} onIncrement={increment} onDecrement={decrement} />;
};
