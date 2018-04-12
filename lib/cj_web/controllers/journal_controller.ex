defmodule CjWeb.JournalController do
  use CjWeb, :controller

  alias Cj.Core
  alias Cj.Core.Journal

  action_fallback CjWeb.FallbackController

  def index(conn, _params) do
    journals = Character.list_journals()
    render(conn, "index.json", journals: journals)
  end

  def create(conn, %{"journal" => journal_params}) do
    with {:ok, %Journal{} = journal} <- Character.create_journal(journal_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", journal_path(conn, :show, journal))
      |> render(CjWeb.AppView, "journal.json", journal: journal)
    end
  end

  def show(conn, %{"id" => id}) do
    journal = Character.get_journal!(id)
    render(conn, CjWeb.AppView, "journal.json", journal: journal)
  end

  def update(conn, %{"id" => id, "journal" => journal_params}) do
    journal = Character.get_journal!(id)

    with {:ok, %Journal{} = journal} <- Character.update_journal(journal, journal_params) do
      render(conn, CjWeb.AppView, "journal.json", journal: journal)
    end
  end

  def delete(conn, %{"id" => id}) do
    journal = Character.get_journal!(id)
    with {:ok, %Journal{}} <- Character.delete_journal(journal) do
      send_resp(conn, :no_content, "")
    end
  end
end
