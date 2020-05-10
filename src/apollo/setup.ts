import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';

const cache = new InMemoryCache();
export const apolloClient = new ApolloClient({
  cache,
  resolvers: {
    Mutation: {
      updateCounter: (_, { offset }, { cache }) => {
        const query = gql`
          {
            counter @client
          }
        `;
        const data = cache.readQuery({ query });
        const newCounterValue = data.counter + offset;
        cache.writeData({ data: { counter: newCounterValue } });
        return null;
      },
    },
  },
});

const initialData = {
  counter: 0,
};

cache.writeData({ data: initialData });
apolloClient.onResetStore(() => {
  cache.writeData({ data: initialData });
  return Promise.resolve();
});
