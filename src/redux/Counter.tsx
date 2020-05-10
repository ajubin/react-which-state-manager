import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { useSelector, useDispatch } from 'react-redux';
import { selectCounter, counterSlice } from './setup';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectCounter);
  const increment = () => dispatch(counterSlice.actions.increment());
  const decrement = () => dispatch(counterSlice.actions.decrement());

  return <BaseCounter value={value} onIncrement={increment} onDecrement={decrement} />;
};
