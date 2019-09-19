defmodule VidcussWeb.PageControllerTest do
  use VidcussWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert 200 == conn.status
  end
end
