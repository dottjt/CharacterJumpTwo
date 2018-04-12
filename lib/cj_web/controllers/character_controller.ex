defmodule CjWeb.CharacterController do
  use CjWeb, :controller

  alias Cj.Repo 

  alias Cj.Core
  alias Cj.Core.Character

  action_fallback CjWeb.FallbackController

  def index(conn, _params) do
    characters = Core.list_characters()
    render(conn, "index.json", characters: characters)
  end

  def create(conn, %{"character" => character_params}) do
    IO.inspect character_params

    with {:ok, %Character{} = character} <- Core.create_character(character_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", character_path(conn, :show, character))
      |> render(CjWeb.AppView, "character_assoc.json", character_assoc: character)
    end
  end

  def show(conn, %{"id" => id}) do
    character = Core.get_character!(id)
    render(conn, CjWeb.AppView, "character_assoc.json", character_assoc: character)
  end

  def update(conn, %{"id" => id, "character" => character_params}) do
    IO.inspect character_params

    character = 
      Core.get_character!(id)
        |> Repo.preload([:traits, :narratives, :additional_descriptions])

    with {:ok, %Character{} = character} <- Core.update_character(character, character_params) do
      render(conn, CjWeb.AppView, "character_assoc.json", character_assoc: character)
    end
  end

  def delete(conn, %{"id" => id}) do
    character = Core.get_character!(id)

    with {:ok, %Character{}} <- Core.delete_character(character) do
      send_resp(conn, :no_content, "")
    end
  end
end
