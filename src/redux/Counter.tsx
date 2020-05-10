import React from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { useSelector, useDispatch } from 'react-redux';
import { selectCounter, actionCreatorIncrement } from './setup';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectCounter);
  const increment = () => dispatch(actionCreatorIncrement());

  return <BaseCounter value={value} onPress={increment} />;
};
