import { gql, Resolver } from 'apollo-boost';

export const GET_COUNTER_VALUE = gql`
  {
    counter @client
  }
`;

export const INCREASE_COUNTER_VALUE = gql`
  mutation updateCounter($offset: Number!) @client {
    updateCounter(offset: $offset) @client
  }
`;

const updateCounter: Resolver = (_, { offset }, { cache }) => {
  const data = cache.readQuery({ query: GET_COUNTER_VALUE });
  const newCounterValue = data.counter + offset;
  cache.writeData({ data: { counter: newCounterValue } });
  return null;
};

export const initialCounterData = {
  counter: 0,
};

export const counterMutations = {
  updateCounter,
};
