import React, { FunctionComponent } from 'react';

interface BaseCounterProps {
  value: number;
  onIncrement: () => void;
}

export const BaseCounter: FunctionComponent<BaseCounterProps> = ({ value, onIncrement: onPress }) => {
  return (
    <div>
      <button onClick={onPress}>
        <text>Increment</text>
      </button>
      <text>{value}</text>
    </div>
  );
};
