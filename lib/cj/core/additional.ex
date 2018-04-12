defmodule Cj.Core.Additional do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "additional" do
    field :display_name, :string
    field :name, :string
    field :text, :string
    field :type, :string

    # field :character_id, :binary_id
    belongs_to :character, Cj.Core.Character

    timestamps()
  end

  @doc false
  def changeset(additional, attrs) do
    additional
    |> cast(attrs, [:display_name, :text, :type])
    |> validate_required([:display_name, :text, :type])
  end

  def new_changeset(additioanl, attrs) do
    additioanl
    |> cast(attrs, [:display_name, :text, :type, :character_id])
    |> validate_required([:display_name, :text, :type, :character_id])
  end
end
