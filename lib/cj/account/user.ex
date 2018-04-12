defmodule Cj.Account.User do
  use Ecto.Schema
  import Ecto.Changeset
  use Coherence.Schema                                    

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "users" do
    field :display_name, :string
    field :email, :string
    field :is_admin, :boolean, default: false
    field :name, :string
    coherence_schema()                                    

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :display_name, :email, :is_admin] ++ coherence_fields)
    |> validate_required([:name, :display_name, :email, :is_admin])
    |> validate_format(:email, ~r/@/)
    |> validate_coherence(attrs)                         
  end

  def changeset(model, params, :password) do
    model
    |> cast(params, ~w(password password_confirmation reset_password_token reset_password_sent_at))
    |> validate_coherence_password_reset(params)
  end

end
