defmodule CjWeb.JumpController do
  use CjWeb, :controller

  alias Cj.Core
  alias Cj.Core.Jump

  def index(conn, _params) do
    jumps = Core.list_jumps()
    render(conn, "index.html", jumps: jumps)
  end

  def new(conn, _params) do
    changeset = Core.change_jump(%Jump{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"jump" => jump_params}) do
    case Core.create_jump(jump_params) do
      {:ok, jump} ->
        conn
        |> put_flash(:info, "Jump created successfully.")
        |> redirect(to: jump_path(conn, :show, jump))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    jump = Core.get_jump!(id)
    render(conn, "show.html", jump: jump)
  end

  def edit(conn, %{"id" => id}) do
    jump = Core.get_jump!(id)
    changeset = Core.change_jump(jump)
    render(conn, "edit.html", jump: jump, changeset: changeset)
  end

  def update(conn, %{"id" => id, "jump" => jump_params}) do
    jump = Core.get_jump!(id)

    case Core.update_jump(jump, jump_params) do
      {:ok, jump} ->
        conn
        |> put_flash(:info, "Jump updated successfully.")
        |> redirect(to: jump_path(conn, :show, jump))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", jump: jump, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    jump = Core.get_jump!(id)
    {:ok, _jump} = Core.delete_jump(jump)

    conn
    |> put_flash(:info, "Jump deleted successfully.")
    |> redirect(to: jump_path(conn, :index))
  end
end
