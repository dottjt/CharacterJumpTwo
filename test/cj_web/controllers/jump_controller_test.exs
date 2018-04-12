defmodule CjWeb.JumpControllerTest do
  use CjWeb.ConnCase

  alias Cj.Core
  alias Cj.Core.Jump

  @create_attrs %{description: "some description", display_name: "some display_name", name: "some name", secondary_id: "some secondary_id"}
  @update_attrs %{description: "some updated description", display_name: "some updated display_name", name: "some updated name", secondary_id: "some updated secondary_id"}
  @invalid_attrs %{description: nil, display_name: nil, name: nil, secondary_id: nil}

  def fixture(:jump) do
    {:ok, jump} = Core.create_jump(@create_attrs)
    jump
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all jumps", %{conn: conn} do
      conn = get conn, jump_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create jump" do
    test "renders jump when data is valid", %{conn: conn} do
      conn = post conn, jump_path(conn, :create), jump: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, jump_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "description" => "some description",
        "display_name" => "some display_name",
        "name" => "some name",
        "secondary_id" => "some secondary_id"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, jump_path(conn, :create), jump: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update jump" do
    setup [:create_jump]

    test "renders jump when data is valid", %{conn: conn, jump: %Jump{id: id} = jump} do
      conn = put conn, jump_path(conn, :update, jump), jump: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, jump_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "description" => "some updated description",
        "display_name" => "some updated display_name",
        "name" => "some updated name",
        "secondary_id" => "some updated secondary_id"}
    end

    test "renders errors when data is invalid", %{conn: conn, jump: jump} do
      conn = put conn, jump_path(conn, :update, jump), jump: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete jump" do
    setup [:create_jump]

    test "deletes chosen jump", %{conn: conn, jump: jump} do
      conn = delete conn, jump_path(conn, :delete, jump)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, jump_path(conn, :show, jump)
      end
    end
  end

  defp create_jump(_) do
    jump = fixture(:jump)
    {:ok, jump: jump}
  end
end
