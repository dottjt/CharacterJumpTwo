defmodule Cj.Repo.Migrations.CreateNarratives do
  use Ecto.Migration

  def change do
    create table(:narratives, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :text, :string
      add :type, :string
      add :character_id, references(:characters, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:narratives, [:character_id])
  end
end
