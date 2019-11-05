![CI](https://github.com/goozler/vidcuss/workflows/CI/badge.svg)

# Vidcuss

## Development tools

  * Erlang/Elixir
  * PostgreSQL
  * NodeJS

## Install dependencies

For version controlling of development tools [asdf](https://asdf-vm.com/#/core-manage-asdf-vm) is suggested

  * Install `asdf` according to the docs
  * Install everything from `.tool-versions` file

For database managing Docker is suggested

  * Install Docker/Docker Compose
  * Run `docker-compose up` from the project directory

For managing environment variables [direnv](https://direnv.net) is suggested

  * Install `direnv` according to the docs
  * Copy `.envrc.example` to `.envrc`
  * Adjust variables if needed
  * Run `direnv allow .` from projects directory

## NodeJS dependencies

  * Install [yarn](https://yarnpkg.com/)
  * Run `yarn install`

## Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.
