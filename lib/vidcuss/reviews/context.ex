defmodule Vidcuss.Reviews do
  @spec create_video(%{
          required(:titile) => String.t(),
          required(:url) => String.t()
        }) :: {:ok, %__MODULE__.Video{}} | {:error, Ecto.Changeset.t()}
  def create_video(params) do
    params
    |> Vidcuss.Reviews.Video.changeset()
    |> Vidcuss.Repo.insert()
  end
end
