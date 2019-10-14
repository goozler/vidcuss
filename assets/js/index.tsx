import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "react-apollo"
import apolloClient from "./apollo/client"
import App from "./App"

const ApolloApp = (AppComponent: React.FC) => (
  <ApolloProvider client={apolloClient}>
    <AppComponent />
  </ApolloProvider>
)

ReactDOM.render(ApolloApp(App), document.getElementById("root"))
