defmodule VidcussWeb.Schema.Mutations.Reviews.VideosTest do
  use VidcussWeb.ConnCase

  describe "create a video" do
    @mutation """
    mutation createVideo($title: String, $url: String){
      createVideo(title: $title, url: $url) {
        successful
        messages {
          code
          field
        }
        result {
          id
          title
          url
        }
      }
    }
    """

    test "success", %{conn: conn} do
      params = %{
        title: "A new test video",
        url: "https://fakeurl.goozler.ru/a-new-test-video"
      }

      assert %{"data" => data} =
               conn
               |> VidcussWeb.GraphTestApi.request(
                 query: @mutation,
                 variables: params
               )

      assert %{"createVideo" => payload} = data
      video_fields = %{title: :string, url: :string}
      expected = %Vidcuss.Reviews.Video{title: params.title, url: params.url}
      assert_mutation_success(expected, payload, video_fields)

      assert %Vidcuss.Reviews.Video{} =
               Vidcuss.Repo.get(
                 Vidcuss.Reviews.Video,
                 payload["result"]["id"]
               )
    end

    test "validate params", %{conn: conn} do
      params = %{
        title: "",
        url: ""
      }

      assert %{"data" => data} =
               conn
               |> VidcussWeb.GraphTestApi.request(
                 query: @mutation,
                 variables: params
               )

      assert %{"createVideo" => payload} = data

      expected = [
        %AbsintheErrorPayload.ValidationMessage{
          code: :required,
          field: :title
        },
        %AbsintheErrorPayload.ValidationMessage{
          code: :required,
          field: :url
        }
      ]

      assert_mutation_failure(expected, payload, [:code, :field])
    end
  end
end
