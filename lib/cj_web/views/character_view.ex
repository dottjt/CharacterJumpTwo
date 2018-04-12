defmodule CjWeb.CharacterView do
  use CjWeb, :view
  alias CjWeb.CharacterView

  def render("index.json", %{characters: characters}) do
    %{data: render_many(characters, CharacterView, "character.json")}
  end

  def render("show.json", %{character: character}) do
    %{data: render_one(character, CharacterView, "character.json")}
  end

  def render("character.json", %{character: character}) do
    %{id: character.id,
      secondary_id: character.secondary_id,
      name: character.name,
      display_name: character.display_name,
      featured_image: character.featured_image,
      icon: character.icon}
  end
end
