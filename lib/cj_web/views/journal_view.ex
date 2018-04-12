defmodule CjWeb.JournalView do
  use CjWeb, :view
  alias CjWeb.JournalView

  def render("index.json", %{journals: journals}) do
    %{data: render_many(journals, JournalView, "journal.json")}
  end

  def render("show.json", %{journal: journal}) do
    %{data: render_one(journal, JournalView, "journal.json")}
  end

  def render("journal.json", %{journal: journal}) do
    %{id: journal.id,
      text: journal.text}
  end
end
