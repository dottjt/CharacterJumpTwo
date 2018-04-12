defmodule CjWeb.NarrativeController do
  use CjWeb, :controller

  alias Cj.Core
  alias Cj.Core.Narrative

  action_fallback CjWeb.FallbackController

  def index(conn, _params) do
    narratives = Character.list_narratives()
    render(conn, "index.json", narratives: narratives)
  end

  def create(conn, %{"narrative" => narrative_params}) do
    with {:ok, %Narrative{} = narrative} <- Character.create_narrative(narrative_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", narrative_path(conn, :show, narrative))
      |> render(CjWeb.AppView, "narrative.json", narrative: narrative)
    end
  end

  def show(conn, %{"id" => id}) do
    narrative = Character.get_narrative!(id)
    render(conn, CjWeb.AppView, "narrative.json", narrative: narrative)
  end

  def update(conn, %{"id" => id, "narrative" => narrative_params}) do
    narrative = Character.get_narrative!(id)

    with {:ok, %Narrative{} = narrative} <- Character.update_narrative(narrative, narrative_params) do
      render(conn, CjWeb.AppView, "narrative.json", narrative: narrative)
    end
  end

  def delete(conn, %{"id" => id}) do
    narrative = Character.get_narrative!(id)
    with {:ok, %Narrative{}} <- Character.delete_narrative(narrative) do
      send_resp(conn, :no_content, "")
    end
  end
end
