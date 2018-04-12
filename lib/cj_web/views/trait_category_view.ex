defmodule CjWeb.TraitCategoryView do
  use CjWeb, :view
  alias CjWeb.TraitCategoryView

  def render("index.json", %{trait_categories: trait_categories}) do
    %{data: render_many(trait_categories, TraitCategoryView, "trait_category.json")}
  end

  def render("show.json", %{trait_category: trait_category}) do
    %{data: render_one(trait_category, TraitCategoryView, "trait_category.json")}
  end

  def render("trait_category.json", %{trait_category: trait_category}) do
    %{id: trait_category.id,
      name: trait_category.name,
      display_name: trait_category.display_name,
      category: trait_category.category}
  end
end
