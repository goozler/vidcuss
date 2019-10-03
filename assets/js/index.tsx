import React from "react"
import ReactDOM from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import App from "./App"

const apolloClient = new ApolloClient({ uri: "/graphql" })

const ApolloApp = (AppComponent: React.FC) => (
  <ApolloProvider client={apolloClient}>
    <AppComponent />
  </ApolloProvider>
)

ReactDOM.render(ApolloApp(App), document.getElementById("root"))
