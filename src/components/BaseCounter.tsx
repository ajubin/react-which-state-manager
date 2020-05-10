import React, { FunctionComponent } from 'react';

interface BaseCounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const BaseCounter: FunctionComponent<BaseCounterProps> = ({ value, onIncrement, onDecrement }) => {
  return (
    <div>
      <button onClick={onIncrement}>
        <text>Increment</text>
      </button>
      <text>{value}</text>
      <button onClick={onDecrement}>
        <text>Decrement</text>
      </button>
    </div>
  );
};
