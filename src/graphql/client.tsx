import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const cache = new InMemoryCache();

const link = createHttpLink({
  uri: "https://cloud-api.vbreddy.life/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
