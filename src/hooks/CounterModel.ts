import { useState } from 'react';

interface CounterActions {
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (): [number, CounterActions] => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return [value, { increment, decrement }];
};
