defmodule VidcussWeb.Resolvers.Reviews do
  def list_videos(_parent, _args, _resolution) do
    {:ok, Vidcuss.Reviews.list_videos()}
  end
end
