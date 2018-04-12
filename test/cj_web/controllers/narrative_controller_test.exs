defmodule CjWeb.NarrativeControllerTest do
  use CjWeb.ConnCase

  alias Cj.Core
  alias Cj.Core.Narrative

  @create_attrs %{text: "some text", type: "some type"}
  @update_attrs %{text: "some updated text", type: "some updated type"}
  @invalid_attrs %{text: nil, type: nil}

  def fixture(:narrative) do
    {:ok, narrative} = Core.create_narrative(@create_attrs)
    narrative
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all narratives", %{conn: conn} do
      conn = get conn, narrative_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create narrative" do
    test "renders narrative when data is valid", %{conn: conn} do
      conn = post conn, narrative_path(conn, :create), narrative: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, narrative_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "text" => "some text",
        "type" => "some type"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, narrative_path(conn, :create), narrative: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update narrative" do
    setup [:create_narrative]

    test "renders narrative when data is valid", %{conn: conn, narrative: %Narrative{id: id} = narrative} do
      conn = put conn, narrative_path(conn, :update, narrative), narrative: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, narrative_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "text" => "some updated text",
        "type" => "some updated type"}
    end

    test "renders errors when data is invalid", %{conn: conn, narrative: narrative} do
      conn = put conn, narrative_path(conn, :update, narrative), narrative: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete narrative" do
    setup [:create_narrative]

    test "deletes chosen narrative", %{conn: conn, narrative: narrative} do
      conn = delete conn, narrative_path(conn, :delete, narrative)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, narrative_path(conn, :show, narrative)
      end
    end
  end

  defp create_narrative(_) do
    narrative = fixture(:narrative)
    {:ok, narrative: narrative}
  end
end
