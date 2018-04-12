defmodule Cj.Core.Trait do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "traits" do
    field :display_name, :string
    field :name, :string
    field :selected, :boolean

    # field :character_id, :binary_id
    belongs_to :character, Cj.Core.Character

    timestamps()
  end

  @doc false
  def changeset(trait, attrs) do
    trait
    |> cast(attrs, [:name, :display_name])
    |> validate_required([:name, :display_name])
  end
end
