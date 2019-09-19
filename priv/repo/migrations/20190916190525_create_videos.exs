defmodule Vidcuss.Repo.Migrations.CreateVideos do
  use Ecto.Migration

  def change do
    create table(:videos, primary_key: false) do
      add(:id, :uuid, primary_key: true, default: fragment("uuid_generate_v4()"))
      add(:title, :string, null: false)
      add(:url, :string, null: false)
      timestamps()
    end
  end
end
