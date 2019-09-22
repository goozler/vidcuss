defmodule Vidcuss.Factory do
  use ExMachina.Ecto, repo: Vidcuss.Repo

  def video_factory do
    %Vidcuss.Reviews.Video{
      title: sequence(:video_title, &"Video #{&1}"),
      url: sequence(:video_url, &"https://fakeurl.goozler.ru/video-#{&1}")
    }
  end
end
