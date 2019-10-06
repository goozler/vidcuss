defmodule VidcussWeb.Resolvers.Reviews do
  def list_videos(_parent, _args, _resolution) do
    {:ok, Vidcuss.Reviews.list_videos()}
  end

  def create_video(_parent, args, _resolution) do
    Vidcuss.Reviews.create_video(args)
  end
end
