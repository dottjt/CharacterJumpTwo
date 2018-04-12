defmodule CjWeb.TraitView do
  use CjWeb, :view
  alias CjWeb.TraitView

  def render("index.json", %{traits: traits}) do
    %{data: render_many(traits, TraitView, "trait.json")}
  end

  def render("show.json", %{trait: trait}) do
    %{data: render_one(trait, TraitView, "trait.json")}
  end

  def render("trait.json", %{trait: trait}) do
    %{id: trait.id,
      name: trait.name,
      display_name: trait.display_name}
  end
end
