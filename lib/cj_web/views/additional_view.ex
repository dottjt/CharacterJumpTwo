defmodule CjWeb.AdditionalView do
  use CjWeb, :view

  def render("index.json", %{additional_descriptions: additional_descriptions}) do
    %{data: render_many(additional_descriptions, AdditionalDescriptionView, "additional_description.json")}
  end

  def render("show.json", %{additional_description: additional_description}) do
    %{data: render_one(additional_description, AdditionalDescriptionView, "additional_description.json")}
  end

  def render("additional.json", %{additional: additional}) do
    %{id: additional.id,
      display_name: additional.display_name,
      text: additional.text}
  end

end
