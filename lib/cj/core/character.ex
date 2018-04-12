defmodule Cj.Core.Character do
  use Ecto.Schema
  import Ecto.Changeset


  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "characters" do
    field :description, :string
    field :display_name, :string
    field :featured_image, :string
    field :name, :string
    field :secondary_id, :string
    field :jump_id, :binary_id
    field :selected, :boolean, default: false 

    has_many :traits, Cj.Core.Trait
    has_many :narratives, Cj.Core.Narrative    
    has_many :journals, Cj.Core.Journal
    has_many :additional, Cj.Core.Additional
    
    belongs_to :day, Cj.Core.Jump
    
    timestamps()
  end

  @doc false
  def changeset(character, attrs) do
    character
    |> cast(attrs, [:secondary_id, :name, :display_name, :description, :featured_image])
    |> validate_required([:secondary_id, :name, :display_name, :description, :featured_image])
  end

  def new_changeset(character, attrs) do
    character
    |> cast(attrs, [:display_name, :description])
    |> put_change(:name, Helper.display_name_convert(attrs["display_name"]))
    |> put_change(:secondary_id, Helper.generate_secondary_id())
    |> cast_assoc(:traits)
    |> validate_required([:display_name, :name, :description, :secondary_id, :traits])
  end

  def update_changeset(character, attrs) do
    character
    |> cast(attrs, [:display_name, :description])
    |> put_change(:name, Helper.display_name_convert(attrs["display_name"]))
    |> cast_assoc(:traits)
    |> cast_assoc(:narratives)    
    |> cast_assoc(:journals)
    |> cast_assoc(:additional)
  end

end
