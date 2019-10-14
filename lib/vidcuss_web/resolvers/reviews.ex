defmodule VidcussWeb.Resolvers.Reviews do
  def list_videos(_parent, _args, _resolution) do
    {:ok, Vidcuss.Reviews.list_videos()}
  end

  def create_video(_parent, args, _resolution) do
    Vidcuss.Reviews.create_video(args)
    |> case do
      {:ok, video} -> {:ok, video}
      {:error, %Ecto.Changeset{} = changeset} -> {:ok, changeset}
    end
  end
end
