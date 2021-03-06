import { ApolloClient } from "apollo-client"
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"

// generated by Fragment Matcher plugin
import introspectionResult from "../graphql/introspection-result"

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: introspectionResult,
})

const cache = new InMemoryCache({
  fragmentMatcher,
})

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    new HttpLink({
      uri: "/graphql",
      credentials: "same-origin",
    }),
  ]),
  cache: cache,
})

export default client
