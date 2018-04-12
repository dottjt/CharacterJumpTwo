defmodule Cj.Repo.Migrations.CreateDays do
  use Ecto.Migration

  def change do
    create table(:days, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :date, :utc_datetime
      add :journal_id, references(:journals, on_delete: :nothing, type: :binary_id)
      add :jump_id, references(:jumps, on_delete: :nothing, type: :binary_id)

      timestamps()
    end

    create index(:days, [:journal_id])
    create index(:days, [:jump_id])
  end
end
