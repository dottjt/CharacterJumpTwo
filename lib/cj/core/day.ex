defmodule Cj.Core.Day do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "days" do
    field :date, :utc_datetime
    
    # field :journal_id, :binary_id
    # field :jump_id, :binary_id

    belongs_to :jump, Cj.Core.Jump
    belongs_to :journal, Cj.Core.Journal

    timestamps()
  end

  @doc false
  def changeset(day, attrs) do
    day
    |> cast(attrs, [:date])
    |> validate_required([:date])
  end
end
