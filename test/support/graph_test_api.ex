defmodule VidcussWeb.GraphTestApi do
  use Phoenix.ConnTest
  @endpoint VidcussWeb.Endpoint

  def request(conn, options) do
    conn
    |> post("/graphql", build_query(options[:query], options[:variables]))
    |> json_response(200)
  end

  defp build_query(query, variables) do
    %{
      "query" => query,
      "variables" => variables
    }
  end
end
