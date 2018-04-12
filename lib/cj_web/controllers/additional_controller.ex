defmodule CjWeb.AdditionalController do
  use CjWeb, :controller

  alias Cj.Core
  alias Cj.Core.Additional

  def index(conn, _params) do
    additional = Core.list_additional()
    render(conn, "index.html", additional: additional)
  end

  def new(conn, _params) do
    changeset = Core.change_additional(%Additional{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"additional" => additional_params}) do
    case Core.create_additional(additional_params) do
      {:ok, additional} ->
        conn
        |> put_flash(:info, "Additional created successfully.")
        |> redirect(to: additional_path(conn, :show, additional))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    additional = Core.get_additional!(id)
    render(conn, "show.html", additional: additional)
  end

  def edit(conn, %{"id" => id}) do
    additional = Core.get_additional!(id)
    changeset = Core.change_additional(additional)
    render(conn, "edit.html", additional: additional, changeset: changeset)
  end

  def update(conn, %{"id" => id, "additional" => additional_params}) do
    additional = Core.get_additional!(id)

    case Core.update_additional(additional, additional_params) do
      {:ok, additional} ->
        conn
        |> put_flash(:info, "Additional updated successfully.")
        |> redirect(to: additional_path(conn, :show, additional))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", additional: additional, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    additional = Core.get_additional!(id)
    {:ok, _additional} = Core.delete_additional(additional)

    conn
    |> put_flash(:info, "Additional deleted successfully.")
    |> redirect(to: additional_path(conn, :index))
  end
end
