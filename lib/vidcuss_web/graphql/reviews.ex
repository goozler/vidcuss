defmodule VidcussWeb.Schema.Types.Reviews do
  use Absinthe.Schema.Notation

  object :video do
    field :id, non_null(:id)
    field :title, non_null(:string)
    field :url, non_null(:string)
  end
end
