defmodule VidcussWeb.Schema.Queries.Reviews.VideosTest do
  use VidcussWeb.ConnCase

  @query """
  {
    videos {
      title
    }
  }
  """

  test "list all videos", %{conn: conn} do
    insert(:video, title: "Test Video 1")
    insert(:video, title: "Test Video 2")

    assert %{"data" => data} =
             conn
             |> VidcussWeb.GraphTestApi.request(query: @query)

    assert match?(
             [
               %{"title" => "Test Video 1"},
               %{"title" => "Test Video 2"}
             ],
             Enum.sort(data["videos"])
           )
  end
end
