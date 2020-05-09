import React, { FunctionComponent } from 'react';
import { BaseCounter } from '../components/BaseCounter';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_COUNTER_VALUE = gql`
  {
    counter @client
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
  const { data, client } = useQuery(GET_COUNTER_VALUE);
  const increment = () => client.writeData({ data: { counter: data.counter + 1 } });

  return <BaseCounter value={data.counter} onPress={increment} />;
};
