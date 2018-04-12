defmodule Cj.Core do
  @moduledoc """
  The Core context.
  """

  import Ecto.Query, warn: false
  alias Cj.Repo

  alias Cj.Core.Day

  @doc """
  Returns the list of days.

  ## Examples

      iex> list_days()
      [%Day{}, ...]

  """
  def list_days do
    Repo.all(Day)
  end


  @doc """
  Gets a single day.

  Raises `Ecto.NoResultsError` if the Day does not exist.

  ## Examples

      iex> get_day!(123)
      %Day{}

      iex> get_day!(456)
      ** (Ecto.NoResultsError)

  """
  def get_day!(id), do: Repo.get!(Day, id)

  @doc """
  Creates a day.

  ## Examples

      iex> create_day(%{field: value})
      {:ok, %Day{}}

      iex> create_day(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_day(attrs \\ %{}) do
    %Day{}
    |> Day.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a day.

  ## Examples

      iex> update_day(day, %{field: new_value})
      {:ok, %Day{}}

      iex> update_day(day, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_day(%Day{} = day, attrs) do
    day
    |> Day.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Day.

  ## Examples

      iex> delete_day(day)
      {:ok, %Day{}}

      iex> delete_day(day)
      {:error, %Ecto.Changeset{}}

  """
  def delete_day(%Day{} = day) do
    Repo.delete(day)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking day changes.

  ## Examples

      iex> change_day(day)
      %Ecto.Changeset{source: %Day{}}

  """
  def change_day(%Day{} = day) do
    Day.changeset(day, %{})
  end

  alias Cj.Core.Jump

  @doc """
  Returns the list of jumps.

  ## Examples

      iex> list_jumps()
      [%Jump{}, ...]

  """
  def list_jumps do
    Repo.all(Jump)
  end

  @doc """
  Gets a single jump.

  Raises `Ecto.NoResultsError` if the Jump does not exist.

  ## Examples

      iex> get_jump!(123)
      %Jump{}

      iex> get_jump!(456)
      ** (Ecto.NoResultsError)

  """
  def get_jump!(id), do: Repo.get!(Jump, id)

  @doc """
  Creates a jump.

  ## Examples

      iex> create_jump(%{field: value})
      {:ok, %Jump{}}

      iex> create_jump(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_jump(attrs \\ %{}) do
    %Jump{}
    |> Jump.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a jump.

  ## Examples

      iex> update_jump(jump, %{field: new_value})
      {:ok, %Jump{}}

      iex> update_jump(jump, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_jump(%Jump{} = jump, attrs) do
    jump
    |> Jump.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Jump.

  ## Examples

      iex> delete_jump(jump)
      {:ok, %Jump{}}

      iex> delete_jump(jump)
      {:error, %Ecto.Changeset{}}

  """
  def delete_jump(%Jump{} = jump) do
    Repo.delete(jump)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking jump changes.

  ## Examples

      iex> change_jump(jump)
      %Ecto.Changeset{source: %Jump{}}

  """
  def change_jump(%Jump{} = jump) do
    Jump.changeset(jump, %{})
  end

  alias Cj.Core.Character

  @doc """
  Returns the list of characters.

  ## Examples

      iex> list_characters()
      [%Character{}, ...]

  """
  def list_characters do
    Repo.all(Character)
  end

  def list_characters_assoc do
    Repo.all(Character) |> Repo.preload([:traits, :additional, :narratives])
  end

  @doc """
  Gets a single character.

  Raises `Ecto.NoResultsError` if the Character does not exist.

  ## Examples

      iex> get_character!(123)
      %Character{}

      iex> get_character!(456)
      ** (Ecto.NoResultsError)

  """
  def get_character!(id), do: Repo.get!(Character, id)

  @doc """
  Creates a character.

  ## Examples

      iex> create_character(%{field: value})
      {:ok, %Character{}}

      iex> create_character(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_character(attrs \\ %{}) do
    %Character{}
    |> Character.new_changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a character.

  ## Examples

      iex> update_character(character, %{field: new_value})
      {:ok, %Character{}}

      iex> update_character(character, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_character(%Character{} = character, attrs) do
    character
    |> Character.update_changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Character.

  ## Examples

      iex> delete_character(character)
      {:ok, %Character{}}

      iex> delete_character(character)
      {:error, %Ecto.Changeset{}}

  """
  def delete_character(%Character{} = character) do
    Repo.delete(character)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking character changes.

  ## Examples

      iex> change_character(character)
      %Ecto.Changeset{source: %Character{}}

  """
  def change_character(%Character{} = character) do
    Character.changeset(character, %{})
  end

  alias Cj.Core.Journal

  @doc """
  Returns the list of journals.

  ## Examples

      iex> list_journals()
      [%Journal{}, ...]

  """
  def list_journals do
    Repo.all(Journal)
  end

  @doc """
  Gets a single journal.

  Raises `Ecto.NoResultsError` if the Journal does not exist.

  ## Examples

      iex> get_journal!(123)
      %Journal{}

      iex> get_journal!(456)
      ** (Ecto.NoResultsError)

  """
  def get_journal!(id), do: Repo.get!(Journal, id)

  @doc """
  Creates a journal.

  ## Examples

      iex> create_journal(%{field: value})
      {:ok, %Journal{}}

      iex> create_journal(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_journal(attrs \\ %{}) do
    %Journal{}
    |> Journal.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a journal.

  ## Examples

      iex> update_journal(journal, %{field: new_value})
      {:ok, %Journal{}}

      iex> update_journal(journal, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_journal(%Journal{} = journal, attrs) do
    journal
    |> Journal.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Journal.

  ## Examples

      iex> delete_journal(journal)
      {:ok, %Journal{}}

      iex> delete_journal(journal)
      {:error, %Ecto.Changeset{}}

  """
  def delete_journal(%Journal{} = journal) do
    Repo.delete(journal)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking journal changes.

  ## Examples

      iex> change_journal(journal)
      %Ecto.Changeset{source: %Journal{}}

  """
  def change_journal(%Journal{} = journal) do
    Journal.changeset(journal, %{})
  end

  alias Cj.Core.Narrative

  @doc """
  Returns the list of narratives.

  ## Examples

      iex> list_narratives()
      [%Narrative{}, ...]

  """
  def list_narratives do
    Repo.all(Narrative)
  end

  @doc """
  Gets a single narrative.

  Raises `Ecto.NoResultsError` if the Narrative does not exist.

  ## Examples

      iex> get_narrative!(123)
      %Narrative{}

      iex> get_narrative!(456)
      ** (Ecto.NoResultsError)

  """
  def get_narrative!(id), do: Repo.get!(Narrative, id)

  @doc """
  Creates a narrative.

  ## Examples

      iex> create_narrative(%{field: value})
      {:ok, %Narrative{}}

      iex> create_narrative(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_narrative(attrs \\ %{}) do
    %Narrative{}
    |> Narrative.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a narrative.

  ## Examples

      iex> update_narrative(narrative, %{field: new_value})
      {:ok, %Narrative{}}

      iex> update_narrative(narrative, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_narrative(%Narrative{} = narrative, attrs) do
    narrative
    |> Narrative.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Narrative.

  ## Examples

      iex> delete_narrative(narrative)
      {:ok, %Narrative{}}

      iex> delete_narrative(narrative)
      {:error, %Ecto.Changeset{}}

  """
  def delete_narrative(%Narrative{} = narrative) do
    Repo.delete(narrative)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking narrative changes.

  ## Examples

      iex> change_narrative(narrative)
      %Ecto.Changeset{source: %Narrative{}}

  """
  def change_narrative(%Narrative{} = narrative) do
    Narrative.changeset(narrative, %{})
  end

  alias Cj.Core.Trait

  @doc """
  Returns the list of traits.

  ## Examples

      iex> list_traits()
      [%Trait{}, ...]

  """
  def list_traits do
    Repo.all(Trait)
  end

  @doc """
  Gets a single trait.

  Raises `Ecto.NoResultsError` if the Trait does not exist.

  ## Examples

      iex> get_trait!(123)
      %Trait{}

      iex> get_trait!(456)
      ** (Ecto.NoResultsError)

  """
  def get_trait!(id), do: Repo.get!(Trait, id)

  @doc """
  Creates a trait.

  ## Examples

      iex> create_trait(%{field: value})
      {:ok, %Trait{}}

      iex> create_trait(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_trait(attrs \\ %{}) do
    %Trait{}
    |> Trait.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a trait.

  ## Examples

      iex> update_trait(trait, %{field: new_value})
      {:ok, %Trait{}}

      iex> update_trait(trait, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_trait(%Trait{} = trait, attrs) do
    trait
    |> Trait.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Trait.

  ## Examples

      iex> delete_trait(trait)
      {:ok, %Trait{}}

      iex> delete_trait(trait)
      {:error, %Ecto.Changeset{}}

  """
  def delete_trait(%Trait{} = trait) do
    Repo.delete(trait)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking trait changes.

  ## Examples

      iex> change_trait(trait)
      %Ecto.Changeset{source: %Trait{}}

  """
  def change_trait(%Trait{} = trait) do
    Trait.changeset(trait, %{})
  end

  alias Cj.Core.Additional

  @doc """
  Returns the list of additional.

  ## Examples

      iex> list_additional()
      [%Additional{}, ...]

  """
  def list_additional do
    Repo.all(Additional)
  end

  @doc """
  Gets a single additional.

  Raises `Ecto.NoResultsError` if the Additional does not exist.

  ## Examples

      iex> get_additional!(123)
      %Additional{}

      iex> get_additional!(456)
      ** (Ecto.NoResultsError)

  """
  def get_additional!(id), do: Repo.get!(Additional, id)

  @doc """
  Creates a additional.

  ## Examples

      iex> create_additional(%{field: value})
      {:ok, %Additional{}}

      iex> create_additional(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_additional(attrs \\ %{}) do
    %Additional{}
    |> Additional.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a additional.

  ## Examples

      iex> update_additional(additional, %{field: new_value})
      {:ok, %Additional{}}

      iex> update_additional(additional, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_additional(%Additional{} = additional, attrs) do
    additional
    |> Additional.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Additional.

  ## Examples

      iex> delete_additional(additional)
      {:ok, %Additional{}}

      iex> delete_additional(additional)
      {:error, %Ecto.Changeset{}}

  """
  def delete_additional(%Additional{} = additional) do
    Repo.delete(additional)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking additional changes.

  ## Examples

      iex> change_additional(additional)
      %Ecto.Changeset{source: %Additional{}}

  """
  def change_additional(%Additional{} = additional) do
    Additional.changeset(additional, %{})
  end
end
