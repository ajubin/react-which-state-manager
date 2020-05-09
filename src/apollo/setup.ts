import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();
export const apolloClient = new ApolloClient({
  cache,
  resolvers: {},
});

const initialData = {
  counter: 0,
};

cache.writeData({ data: initialData });
apolloClient.onResetStore(() => {
  cache.writeData({ data: initialData });
  return Promise.resolve();
});
