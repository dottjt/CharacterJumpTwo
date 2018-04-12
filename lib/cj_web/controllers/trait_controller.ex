defmodule CjWeb.TraitController do
  use CjWeb, :controller

  alias Cj.Core
  alias Cj.Core.Trait

  action_fallback CjWeb.FallbackController

  def index(conn, _params) do
    traits = Character.list_traits()
    render(conn, "index.json", traits: traits)
  end

  def create(conn, %{"trait" => trait_params}) do
    with {:ok, %Trait{} = trait} <- Character.create_trait(trait_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", trait_path(conn, :show, trait))
      |> render("show.json", trait: trait)
    end
  end

  def show(conn, %{"id" => id}) do
    trait = Character.get_trait!(id)
    render(conn, "show.json", trait: trait)
  end

  def update(conn, %{"id" => id, "trait" => trait_params}) do
    trait = Character.get_trait!(id)

    with {:ok, %Trait{} = trait} <- Character.update_trait(trait, trait_params) do
      render(conn, "show.json", trait: trait)
    end
  end

  def delete(conn, %{"id" => id}) do
    trait = Character.get_trait!(id)
    with {:ok, %Trait{}} <- Character.delete_trait(trait) do
      send_resp(conn, :no_content, "")
    end
  end
end
