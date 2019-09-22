defmodule Vidcuss.ReviewsTest do
  use Vidcuss.DataCase, async: true

  test "list videos" do
    insert_list(3, :video)
    assert 3 == Vidcuss.Reviews.list_videos() |> Enum.count()
  end

  test "create a video" do
    invalid_params = %{}

    assert {:error, changeset} = Vidcuss.Reviews.create_video(invalid_params)

    assert %{
             title: ["can't be blank"],
             url: ["can't be blank"]
           } == errors_on(changeset)

    valid_params = %{
      title: "new video",
      url: "http://youtube.com/ac7v3Xd"
    }

    assert {:ok, video} = Vidcuss.Reviews.create_video(valid_params)

    assert valid_params.title == video.title
    assert valid_params.url == video.url
  end
end
