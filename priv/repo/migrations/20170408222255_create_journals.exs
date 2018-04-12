defmodule Cj.Repo.Migrations.CreateJournals do
  use Ecto.Migration

  def change do
    create table(:journals, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :secondary_id, :string
      add :text, :string
      add :type, :string
      add :character_id, references(:characters, on_delete: :nothing, type: :binary_id)
      
      add :jump_id, references(:jumps, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:journals, [:character_id])
    create index(:journals, [:jump_id])
  end
end
