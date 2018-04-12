defmodule CjWeb.AdditionalControllerTest do
  use CjWeb.ConnCase

  alias Cj.Core
  alias Cj.Core.Additional

  @create_attrs %{display_name: "some display_name", name: "some name", text: "some text", type: "some type"}
  @update_attrs %{display_name: "some updated display_name", name: "some updated name", text: "some updated text", type: "some updated type"}
  @invalid_attrs %{display_name: nil, name: nil, text: nil, type: nil}

  def fixture(:additional) do
    {:ok, additional} = Core.create_additional(@create_attrs)
    additional
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all additional", %{conn: conn} do
      conn = get conn, additional_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create additional" do
    test "renders additional when data is valid", %{conn: conn} do
      conn = post conn, additional_path(conn, :create), additional: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, additional_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "display_name" => "some display_name",
        "name" => "some name",
        "text" => "some text",
        "type" => "some type"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, additional_path(conn, :create), additional: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update additional" do
    setup [:create_additional]

    test "renders additional when data is valid", %{conn: conn, additional: %Additional{id: id} = additional} do
      conn = put conn, additional_path(conn, :update, additional), additional: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, additional_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "display_name" => "some updated display_name",
        "name" => "some updated name",
        "text" => "some updated text",
        "type" => "some updated type"}
    end

    test "renders errors when data is invalid", %{conn: conn, additional: additional} do
      conn = put conn, additional_path(conn, :update, additional), additional: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete additional" do
    setup [:create_additional]

    test "deletes chosen additional", %{conn: conn, additional: additional} do
      conn = delete conn, additional_path(conn, :delete, additional)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, additional_path(conn, :show, additional)
      end
    end
  end

  defp create_additional(_) do
    additional = fixture(:additional)
    {:ok, additional: additional}
  end
end
