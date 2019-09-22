defmodule VidcussWeb.Router do
  use VidcussWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  forward("/graphql", Absinthe.Plug, schema: VidcussWeb.Schema)

  if Mix.env() == :dev do
    forward(
      "/graphiql",
      Absinthe.Plug.GraphiQL,
      schema: VidcussWeb.Schema
    )
  end

  scope "/", VidcussWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", VidcussWeb do
  #   pipe_through :api
  # end
end
