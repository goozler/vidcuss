defmodule Vidcuss do
  @doc """
  The name of the project that could be used as a placeholder
  """
  @title "Vidcuss"
  def title, do: @title

  @doc """
  Share the common settings between schemas.
  Use a uuid as a default primary key

  ## Example
      use Vidcuss, :schema
  """
  def schema do
    quote do
      use Ecto.Schema
      @primary_key {:id, :binary_id, autogenerate: true}
      @foreign_key_type :binary_id
    end
  end

  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
