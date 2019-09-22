defmodule VidcussWeb.Schema.Types.Reviews do
  use Absinthe.Schema.Notation

  object :video do
    field :id, :id
    field :title, :string
    field :url, :string
  end
end
