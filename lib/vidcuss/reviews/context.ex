defmodule Vidcuss.Reviews do
  @spec list_videos() :: [%Vidcuss.Reviews.Video{}]
  def list_videos do
    Vidcuss.Reviews.Video
    |> Vidcuss.Repo.all()
  end

  @spec create_video(%{
          required(:titile) => String.t(),
          required(:url) => String.t()
        }) :: {:ok, %Vidcuss.Reviews.Video{}} | {:error, Ecto.Changeset.t()}
  def create_video(params) do
    params
    |> Vidcuss.Reviews.Video.changeset()
    |> Vidcuss.Repo.insert()
  end
end
