defmodule CjWeb.AppView do
  use CjWeb, :view

  def render("initial_state.json", %{timeline: timeline, characters: characters, traits: traits, narratives: narratives, journals: journals, user: user}) do
    %{timeline: render_many(timeline, CjWeb.AppView, "timeline.json", as: :timeline),
      characters: render_many(characters, CjWeb.AppView, "character_assoc.json", as: :character_assoc),
      narratives: render_many(narratives, CjWeb.AppView, "narrative.json", as: :narrative),
      journals: render_many(journals, CjWeb.AppView, "journal.json", as: :journal),   
      traits: render_many(traits, CjWeb.AppView, "trait.json", as: :trait),
      user: render_one(user, CjWeb.AppView, "user.json", as: :user)
    }
  end

  def render("user.json", %{user: user}) do
    %{ email: user.email,
       name: user.name,
       inserted_at: user.inserted_at,
       current_sign_in_at: user.current_sign_in_at,
       last_sign_in_at: user.last_sign_in_at}
  end

  def render("timeline.json", %{timeline: timeline}) do
    %{id: timeline.id,
      inserted_at: timeline.inserted_at,
      characters: render_many(timeline.characters, CjWeb.AppView, "character.json", as: :character),
      narratives: render_many(timeline.narratives, CjWeb.AppView, "narrative.json", as: :narrative)}
  end

  def render("character.json", %{character: character}) do
    %{id: character.id,
      secondary_id: character.secondary_id,
      name: character.name,
      display_name: character.display_name,
      selected: character.selected,
      journal_id: character.journal_id,
      narrative_id: character.narrative_id
    }
  end

  def render("character_assoc.json", %{character_assoc: character_assoc}) do
    %{id: character_assoc.id,
      secondary_id: character_assoc.secondary_id,
      name: character_assoc.name,
      display_name: character_assoc.display_name,
      selected: character_assoc.selected,

      traits: render_many(character_assoc.traits, CjWeb.AppView, "trait.json", as: :trait),
      description: render_one(character_assoc.description, CjWeb.AppView, "description.json", as: :description)}
      # additional_descriptions: render_many(character_assoc.additional_descriptions, CjWeb.AppView, "additional_description.json", as: :additional_description),

      # journals: render_many(character_assoc.journals, CjWeb.AppView, "journal.json", as: :journal),
      # narratives: render_many(character_assoc.narratives, CjWeb.AppView, "narrative.json", as: :narrative),
      
      # character_before: render_one(character_assoc.character_before, CjWeb.AppView, "character.json", as: :character),
      # character_after: render_one(character_assoc.character_after, CjWeb.AppView, "character.json", as: :character)}
  end

  def render("trait.json", %{trait: trait}) do
    %{id: trait.id,
      name: trait.name,
      display_name: trait.display_name,
      category: trait.category,
      selected: trait.selected}
  end

  def render("narrative.json", %{narrative: narrative}) do
    %{id: narrative.id,
      text: narrative.text}
  end

  def render("description.json", %{description: description}) do
    %{id: description.id,
      text: description.text}
  end

  def render("additional_description.json", %{additional_description: additional_description}) do
    %{id: additional_description.id,
      display_name: additional_description.display_name,  
      text: additional_description.text}
  end

  def render("journal.json", %{journal: journal}) do
    %{id: journal.id,
      text: journal.text,
      inserted_at: journal.inserted_at}
  end
end
