defmodule Vidcuss.Repo do
  use Ecto.Repo,
    otp_app: :vidcuss,
    adapter: Ecto.Adapters.Postgres
end
