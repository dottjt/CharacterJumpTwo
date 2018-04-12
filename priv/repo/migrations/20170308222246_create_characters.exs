defmodule Cj.Repo.Migrations.CreateCharacters do
  use Ecto.Migration

  def change do
    create table(:characters, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :secondary_id, :string
      add :name, :string
      add :display_name, :string
      add :description, :string
      add :featured_image, :string
      
      add :jump_id, references(:jumps, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:characters, [:jump_id])
  end
end
