defmodule CjWeb.TraitControllerTest do
  use CjWeb.ConnCase

  alias Cj.Core
  alias Cj.Core.Trait

  @create_attrs %{display_name: "some display_name", name: "some name"}
  @update_attrs %{display_name: "some updated display_name", name: "some updated name"}
  @invalid_attrs %{display_name: nil, name: nil}

  def fixture(:trait) do
    {:ok, trait} = Core.create_trait(@create_attrs)
    trait
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all traits", %{conn: conn} do
      conn = get conn, trait_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create trait" do
    test "renders trait when data is valid", %{conn: conn} do
      conn = post conn, trait_path(conn, :create), trait: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, trait_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "display_name" => "some display_name",
        "name" => "some name"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, trait_path(conn, :create), trait: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update trait" do
    setup [:create_trait]

    test "renders trait when data is valid", %{conn: conn, trait: %Trait{id: id} = trait} do
      conn = put conn, trait_path(conn, :update, trait), trait: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, trait_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "display_name" => "some updated display_name",
        "name" => "some updated name"}
    end

    test "renders errors when data is invalid", %{conn: conn, trait: trait} do
      conn = put conn, trait_path(conn, :update, trait), trait: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete trait" do
    setup [:create_trait]

    test "deletes chosen trait", %{conn: conn, trait: trait} do
      conn = delete conn, trait_path(conn, :delete, trait)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, trait_path(conn, :show, trait)
      end
    end
  end

  defp create_trait(_) do
    trait = fixture(:trait)
    {:ok, trait: trait}
  end
end
