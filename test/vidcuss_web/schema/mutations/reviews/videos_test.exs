defmodule VidcussWeb.Schema.Mutations.Reviews.VideosTest do
  use VidcussWeb.ConnCase

  describe "create a video" do
    @mutation """
    mutation createVideo($title: String, $url: String){
      createVideo(title: $title, url: $url) {
        id
        url
        title
      }
    }
    """

    test "success", %{conn: conn} do
      params = %{
        title: "A new test video",
        url: "https://fakeurl.goozler.ru/a-new-test-video"
      }

      assert %{"data" => %{"createVideo" => result}} =
               conn
               |> VidcussWeb.GraphTestApi.request(query: @mutation, variables: params)

      assert params.title == result["title"]
      assert params.url == result["url"]
      assert result["id"]
    end
  end
end
