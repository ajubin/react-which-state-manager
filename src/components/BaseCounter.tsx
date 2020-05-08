import React, { FunctionComponent } from 'react';

interface BaseCounterProps {
  value: number;
  onPress: () => void;
}

export const BaseCounter: FunctionComponent<BaseCounterProps> = ({ value, onPress }) => {
  return (
    <div>
      <button onClick={onPress}>
        <text>Increment</text>
      </button>
      <text>{value}</text>
    </div>
  );
};
