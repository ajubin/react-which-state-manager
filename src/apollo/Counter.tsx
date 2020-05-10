import React, { FunctionComponent } from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

const GET_COUNTER_VALUE = gql`
  {
    counter @client
  }
`;

const INCREASE_COUNTER_VALUE = gql`
  mutation updateCounter($offset: Number!) @client {
    updateCounter(offset: $offset) @client
  }
`;

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
