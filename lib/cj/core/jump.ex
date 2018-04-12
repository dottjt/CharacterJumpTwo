defmodule Cj.Core.Jump do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "jumps" do
    field :description, :string
    field :display_name, :string
    field :name, :string
    field :secondary_id, :string

    has_one :pre, Cj.Core.Character 
    has_one :post, Cj.Core.Character

    has_many :days, Cj.Core.Days
    has_many :journals, Cj.Core.Journals
    
    timestamps()
  end

  @doc false
  def changeset(jump, attrs) do
    jump
    |> cast(attrs, [:secondary_id, :name, :display_name, :description])
    |> validate_required([:secondary_id, :name, :display_name, :description])
  end
end
