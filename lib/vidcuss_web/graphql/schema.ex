defmodule VidcussWeb.Schema do
  use Absinthe.Schema

  import_types(VidcussWeb.Schema.Types.Reviews)

  query do
    @desc "Get all videos"
    field :videos, non_null(list_of(non_null(:video))) do
      resolve(&VidcussWeb.Resolvers.Reviews.list_videos/3)
    end
  end

  mutation do
    @desc "Create a video"
    field :create_video, :video do
      arg(:title, :string)
      arg(:url, :string)
      resolve(&VidcussWeb.Resolvers.Reviews.create_video/3)
    end
  end
end
