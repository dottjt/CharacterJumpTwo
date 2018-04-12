defmodule Cj.Repo.Migrations.CreateJumps do
  use Ecto.Migration

  def change do
    create table(:jumps, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :secondary_id, :string
      add :name, :string
      add :display_name, :string
      add :description, :string

      timestamps()
    end

  end
end
