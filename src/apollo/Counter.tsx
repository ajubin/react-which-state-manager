import React, { FunctionComponent } from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_COUNTER_VALUE, INCREASE_COUNTER_VALUE } from './CounterModel';

/**
 *
 * with direct write to cache
 *
 * Drawbacks :
 *  - no type completion on cache,
 *  - crash if no initial data in cache
 */

export const Counter: FunctionComponent = () => {
  const { data } = useQuery(GET_COUNTER_VALUE);
  const [increment] = useMutation(INCREASE_COUNTER_VALUE, { variables: { offset: 1 } });
  const [decrement] = useMutation(INCREASE_COUNTER_VALUE, { variables: { offset: -1 } });

  return <BaseCounter value={data.counter} onIncrement={increment} onDecrement={decrement} />;
};
