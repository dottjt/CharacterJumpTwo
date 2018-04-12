defmodule Cj.CoreTest do
  use Cj.DataCase

  alias Cj.Core

  describe "days" do
    alias Cj.Core.Day

    @valid_attrs %{date: "2010-04-17 14:00:00.000000Z"}
    @update_attrs %{date: "2011-05-18 15:01:01.000000Z"}
    @invalid_attrs %{date: nil}

    def day_fixture(attrs \\ %{}) do
      {:ok, day} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Core.create_day()

      day
    end

    test "list_days/0 returns all days" do
      day = day_fixture()
      assert Core.list_days() == [day]
    end

    test "get_day!/1 returns the day with given id" do
      day = day_fixture()
      assert Core.get_day!(day.id) == day
    end

    test "create_day/1 with valid data creates a day" do
      assert {:ok, %Day{} = day} = Core.create_day(@valid_attrs)
      assert day.date == DateTime.from_naive!(~N[2010-04-17 14:00:00.000000Z], "Etc/UTC")
    end

    test "create_day/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Core.create_day(@invalid_attrs)
    end

    test "update_day/2 with valid data updates the day" do
      day = day_fixture()
      assert {:ok, day} = Core.update_day(day, @update_attrs)
      assert %Day{} = day
      assert day.date == DateTime.from_naive!(~N[2011-05-18 15:01:01.000000Z], "Etc/UTC")
    end

    test "update_day/2 with invalid data returns error changeset" do
      day = day_fixture()
      assert {:error, %Ecto.Changeset{}} = Core.update_day(day, @invalid_attrs)
      assert day == Core.get_day!(day.id)
    end

    test "delete_day/1 deletes the day" do
      day = day_fixture()
      assert {:ok, %Day{}} = Core.delete_day(day)
      assert_raise Ecto.NoResultsError, fn -> Core.get_day!(day.id) end
    end

    test "change_day/1 returns a day changeset" do
      day = day_fixture()
      assert %Ecto.Changeset{} = Core.change_day(day)
    end
  end

  describe "jumps" do
    alias Cj.Core.Jump

    @valid_attrs %{description: "some description", display_name: "some display_name", name: "some name", secondary_id: "some secondary_id"}
    @update_attrs %{description: "some updated description", display_name: "some updated display_name", name: "some updated name", secondary_id: "some updated secondary_id"}
    @invalid_attrs %{description: nil, display_name: nil, name: nil, secondary_id: nil}

    def jump_fixture(attrs \\ %{}) do
      {:ok, jump} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Core.create_jump()

      jump
    end

    test "list_jumps/0 returns all jumps" do
      jump = jump_fixture()
      assert Core.list_jumps() == [jump]
    end

    test "get_jump!/1 returns the jump with given id" do
      jump = jump_fixture()
      assert Core.get_jump!(jump.id) == jump
    end

    test "create_jump/1 with valid data creates a jump" do
      assert {:ok, %Jump{} = jump} = Core.create_jump(@valid_attrs)
      assert jump.description == "some description"
      assert jump.display_name == "some display_name"
      assert jump.name == "some name"
      assert jump.secondary_id == "some secondary_id"
    end

    test "create_jump/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Core.create_jump(@invalid_attrs)
    end

    test "update_jump/2 with valid data updates the jump" do
      jump = jump_fixture()
      assert {:ok, jump} = Core.update_jump(jump, @update_attrs)
      assert %Jump{} = jump
      assert jump.description == "some updated description"
      assert jump.display_name == "some updated display_name"
      assert jump.name == "some updated name"
      assert jump.secondary_id == "some updated secondary_id"
    end

    test "update_jump/2 with invalid data returns error changeset" do
      jump = jump_fixture()
      assert {:error, %Ecto.Changeset{}} = Core.update_jump(jump, @invalid_attrs)
      assert jump == Core.get_jump!(jump.id)
    end

    test "delete_jump/1 deletes the jump" do
      jump = jump_fixture()
      assert {:ok, %Jump{}} = Core.delete_jump(jump)
      assert_raise Ecto.NoResultsError, fn -> Core.get_jump!(jump.id) end
    end

    test "change_jump/1 returns a jump changeset" do
      jump = jump_fixture()
      assert %Ecto.Changeset{} = Core.change_jump(jump)
    end
  end

  describe "characters" do
    alias Cj.Core.Character

    @valid_attrs %{description: "some description", display_name: "some display_name", featured_image: "some featured_image", name: "some name", secondary_id: "some secondary_id"}
    @update_attrs %{description: "some updated description", display_name: "some updated display_name", featured_image: "some updated featured_image", name: "some updated name", secondary_id: "some updated secondary_id"}
    @invalid_attrs %{description: nil, display_name: nil, featured_image: nil, name: nil, secondary_id: nil}

    def character_fixture(attrs \\ %{}) do
      {:ok, character} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Core.create_character()

      character
    end

    test "list_characters/0 returns all characters" do
      character = character_fixture()
      assert Core.list_characters() == [character]
    end

    test "get_character!/1 returns the character with given id" do
      character = character_fixture()
      assert Core.get_character!(character.id) == character
    end

    test "create_character/1 with valid data creates a character" do
      assert {:ok, %Character{} = character} = Core.create_character(@valid_attrs)
      assert character.description == "some description"
      assert character.display_name == "some display_name"
      assert character.featured_image == "some featured_image"
      assert character.name == "some name"
      assert character.secondary_id == "some secondary_id"
    end

    test "create_character/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Core.create_character(@invalid_attrs)
    end

    test "update_character/2 with valid data updates the character" do
      character = character_fixture()
      assert {:ok, character} = Core.update_character(character, @update_attrs)
      assert %Character{} = character
      assert character.description == "some updated description"
      assert character.display_name == "some updated display_name"
      assert character.featured_image == "some updated featured_image"
      assert character.name == "some updated name"
      assert character.secondary_id == "some updated secondary_id"
    end

    test "update_character/2 with invalid data returns error changeset" do
      character = character_fixture()
      assert {:error, %Ecto.Changeset{}} = Core.update_character(character, @invalid_attrs)
      assert character == Core.get_character!(character.id)
    end

    test "delete_character/1 deletes the character" do
      character = character_fixture()
      assert {:ok, %Character{}} = Core.delete_character(character)
      assert_raise Ecto.NoResultsError, fn -> Core.get_character!(character.id) end
    end

    test "change_character/1 returns a character changeset" do
      character = character_fixture()
      assert %Ecto.Changeset{} = Core.change_character(character)
    end
  end

  describe "journals" do
    alias Cj.Core.Journal

    @valid_attrs %{secondary_id: "some secondary_id", text: "some text", type: "some type"}
    @update_attrs %{secondary_id: "some updated secondary_id", text: "some updated text", type: "some updated type"}
    @invalid_attrs %{secondary_id: nil, text: nil, type: nil}

    def journal_fixture(attrs \\ %{}) do
      {:ok, journal} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Core.create_journal()

      journal
    end

    test "list_journals/0 returns all journals" do
      journal = journal_fixture()
      assert Core.list_journals() == [journal]
    end

    test "get_journal!/1 returns the journal with given id" do
      journal = journal_fixture()
      assert Core.get_journal!(journal.id) == journal
    end

    test "create_journal/1 with valid data creates a journal" do
      assert {:ok, %Journal{} = journal} = Core.create_journal(@valid_attrs)
      assert journal.secondary_id == "some secondary_id"
      assert journal.text == "some text"
      assert journal.type == "some type"
    end

    test "create_journal/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Core.create_journal(@invalid_attrs)
    end

    test "update_journal/2 with valid data updates the journal" do
      journal = journal_fixture()
      assert {:ok, journal} = Core.update_journal(journal, @update_attrs)
      assert %Journal{} = journal
      assert journal.secondary_id == "some updated secondary_id"
      assert journal.text == "some updated text"
      assert journal.type == "some updated type"
    end

    test "update_journal/2 with invalid data returns error changeset" do
      journal = journal_fixture()
      assert {:error, %Ecto.Changeset{}} = Core.update_journal(journal, @invalid_attrs)
      assert journal == Core.get_journal!(journal.id)
    end

    test "delete_journal/1 deletes the journal" do
      journal = journal_fixture()
      assert {:ok, %Journal{}} = Core.delete_journal(journal)
      assert_raise Ecto.NoResultsError, fn -> Core.get_journal!(journal.id) end
    end

    test "change_journal/1 returns a journal changeset" do
      journal = journal_fixture()
      assert %Ecto.Changeset{} = Core.change_journal(journal)
    end
  end

  describe "narratives" do
    alias Cj.Core.Narrative

    @valid_attrs %{text: "some text", type: "some type"}
    @update_attrs %{text: "some updated text", type: "some updated type"}
    @invalid_attrs %{text: nil, type: nil}

    def narrative_fixture(attrs \\ %{}) do
      {:ok, narrative} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Core.create_narrative()

      narrative
    end

    test "list_narratives/0 returns all narratives" do
      narrative = narrative_fixture()
      assert Core.list_narratives() == [narrative]
    end

    test "get_narrative!/1 returns the narrative with given id" do
      narrative = narrative_fixture()
      assert Core.get_narrative!(narrative.id) == narrative
    end

    test "create_narrative/1 with valid data creates a narrative" do
      assert {:ok, %Narrative{} = narrative} = Core.create_narrative(@valid_attrs)
      assert narrative.text == "some text"
      assert narrative.type == "some type"
    end

    test "create_narrative/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Core.create_narrative(@invalid_attrs)
    end

    test "update_narrative/2 with valid data updates the narrative" do
      narrative = narrative_fixture()
      assert {:ok, narrative} = Core.update_narrative(narrative, @update_attrs)
      assert %Narrative{} = narrative
      assert narrative.text == "some updated text"
      assert narrative.type == "some updated type"
    end

    test "update_narrative/2 with invalid data returns error changeset" do
      narrative = narrative_fixture()
      assert {:error, %Ecto.Changeset{}} = Core.update_narrative(narrative, @invalid_attrs)
      assert narrative == Core.get_narrative!(narrative.id)
    end

    test "delete_narrative/1 deletes the narrative" do
      narrative = narrative_fixture()
      assert {:ok, %Narrative{}} = Core.delete_narrative(narrative)
      assert_raise Ecto.NoResultsError, fn -> Core.get_narrative!(narrative.id) end
    end

    test "change_narrative/1 returns a narrative changeset" do
      narrative = narrative_fixture()
      assert %Ecto.Changeset{} = Core.change_narrative(narrative)
    end
  end

  describe "traits" do
    alias Cj.Core.Trait

    @valid_attrs %{display_name: "some display_name", name: "some name"}
    @update_attrs %{display_name: "some updated display_name", name: "some updated name"}
    @invalid_attrs %{display_name: nil, name: nil}

    def trait_fixture(attrs \\ %{}) do
      {:ok, trait} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Core.create_trait()

      trait
    end

    test "list_traits/0 returns all traits" do
      trait = trait_fixture()
      assert Core.list_traits() == [trait]
    end

    test "get_trait!/1 returns the trait with given id" do
      trait = trait_fixture()
      assert Core.get_trait!(trait.id) == trait
    end

    test "create_trait/1 with valid data creates a trait" do
      assert {:ok, %Trait{} = trait} = Core.create_trait(@valid_attrs)
      assert trait.display_name == "some display_name"
      assert trait.name == "some name"
    end

    test "create_trait/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Core.create_trait(@invalid_attrs)
    end

    test "update_trait/2 with valid data updates the trait" do
      trait = trait_fixture()
      assert {:ok, trait} = Core.update_trait(trait, @update_attrs)
      assert %Trait{} = trait
      assert trait.display_name == "some updated display_name"
      assert trait.name == "some updated name"
    end

    test "update_trait/2 with invalid data returns error changeset" do
      trait = trait_fixture()
      assert {:error, %Ecto.Changeset{}} = Core.update_trait(trait, @invalid_attrs)
      assert trait == Core.get_trait!(trait.id)
    end

    test "delete_trait/1 deletes the trait" do
      trait = trait_fixture()
      assert {:ok, %Trait{}} = Core.delete_trait(trait)
      assert_raise Ecto.NoResultsError, fn -> Core.get_trait!(trait.id) end
    end

    test "change_trait/1 returns a trait changeset" do
      trait = trait_fixture()
      assert %Ecto.Changeset{} = Core.change_trait(trait)
    end
  end

  describe "additional" do
    alias Cj.Core.Additional

    @valid_attrs %{display_name: "some display_name", name: "some name", text: "some text", type: "some type"}
    @update_attrs %{display_name: "some updated display_name", name: "some updated name", text: "some updated text", type: "some updated type"}
    @invalid_attrs %{display_name: nil, name: nil, text: nil, type: nil}

    def additional_fixture(attrs \\ %{}) do
      {:ok, additional} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Core.create_additional()

      additional
    end

    test "list_additional/0 returns all additional" do
      additional = additional_fixture()
      assert Core.list_additional() == [additional]
    end

    test "get_additional!/1 returns the additional with given id" do
      additional = additional_fixture()
      assert Core.get_additional!(additional.id) == additional
    end

    test "create_additional/1 with valid data creates a additional" do
      assert {:ok, %Additional{} = additional} = Core.create_additional(@valid_attrs)
      assert additional.display_name == "some display_name"
      assert additional.name == "some name"
      assert additional.text == "some text"
      assert additional.type == "some type"
    end

    test "create_additional/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Core.create_additional(@invalid_attrs)
    end

    test "update_additional/2 with valid data updates the additional" do
      additional = additional_fixture()
      assert {:ok, additional} = Core.update_additional(additional, @update_attrs)
      assert %Additional{} = additional
      assert additional.display_name == "some updated display_name"
      assert additional.name == "some updated name"
      assert additional.text == "some updated text"
      assert additional.type == "some updated type"
    end

    test "update_additional/2 with invalid data returns error changeset" do
      additional = additional_fixture()
      assert {:error, %Ecto.Changeset{}} = Core.update_additional(additional, @invalid_attrs)
      assert additional == Core.get_additional!(additional.id)
    end

    test "delete_additional/1 deletes the additional" do
      additional = additional_fixture()
      assert {:ok, %Additional{}} = Core.delete_additional(additional)
      assert_raise Ecto.NoResultsError, fn -> Core.get_additional!(additional.id) end
    end

    test "change_additional/1 returns a additional changeset" do
      additional = additional_fixture()
      assert %Ecto.Changeset{} = Core.change_additional(additional)
    end
  end
end
