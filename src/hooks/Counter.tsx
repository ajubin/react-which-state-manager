import React, { useState } from 'react';
import { BaseCounter } from '../components/BaseCounter';

export const Counter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };

  return <BaseCounter value={value} onIncrement={increment} onDecrement={decrement} />;
};
