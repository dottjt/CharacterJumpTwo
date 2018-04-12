defmodule Cj.Core.Journal do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "journals" do
    field :secondary_id, :string
    field :text, :string
    field :type, :string

    has_one :day, Cj.Core.Journal

    # field :character_id, :binary_id
    # field :jump_id, :binary_id
    belongs_to :character, Cj.Core.Character
    belongs_to :jump, Cj.Core.Jump

    timestamps()
  end

  @doc false
  def changeset(journal, attrs) do
    journal
    |> cast(attrs, [:secondary_id, :text, :type])
    |> validate_required([:secondary_id, :text, :type])
  end
end
