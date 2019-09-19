defmodule Vidcuss.Reviews.Video do
  use Vidcuss, :schema
  import Ecto.Changeset

  schema "videos" do
    field(:title, :string)
    field(:url, :string)
    timestamps()
  end

  def changeset(changeset \\ %__MODULE__{}, params) do
    changeset
    |> cast(params, [:title, :url])
    |> validate_required([:title, :url])
  end
end
