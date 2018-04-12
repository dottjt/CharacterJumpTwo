defmodule Cj.Core.Narrative do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "narratives" do
    field :text, :string
    field :type, :string
    
    # field :character_id, :binary_id
    belongs_to :character, Cj.Core.Character

    timestamps()
  end

  @doc false
  def changeset(narrative, attrs) do
    narrative
    |> cast(attrs, [:text, :type])
    |> validate_required([:text, :type])
  end
end
