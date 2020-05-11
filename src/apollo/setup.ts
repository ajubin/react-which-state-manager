import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { counterMutations, initialCounterData } from './CounterModel';

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  cache,
  resolvers: {
    Mutation: {
      ...counterMutations,
    },
  },
});

const initialData = {
  ...initialCounterData,
};

cache.writeData({ data: initialData });
apolloClient.onResetStore(() => {
  cache.writeData({ data: { initialData } });
  return Promise.resolve();
});
