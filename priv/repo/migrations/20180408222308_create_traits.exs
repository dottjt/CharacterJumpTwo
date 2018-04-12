defmodule Cj.Repo.Migrations.CreateTraits do
  use Ecto.Migration

  def change do
    create table(:traits, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :string
      add :display_name, :string
      add :character_id, references(:characters, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:traits, [:character_id])
  end
end
