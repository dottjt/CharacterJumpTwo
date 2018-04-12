defmodule Cj.Repo.Migrations.CreateAdditional do
  use Ecto.Migration

  def change do
    create table(:additional, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :name, :string
      add :display_name, :string
      add :text, :string
      add :type, :string
      add :character_id, references(:characters, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:additional, [:character_id])
  end
end
