defmodule CjWeb.AppController do
  use CjWeb, :controller

  alias Cj.Core
  alias Cj.Core.Character

  def app(conn, %{"any" => any}) do

    Coherence.current_user_name(conn)

    render conn, "dashboard.html"
  end

  def initial_state(conn, _params) do
    # this needs to get user state from coherence. 

    user = Coherence.current_user(conn)

    timeline = 
      Core.list_days_assoc()
        # |> Enum.map(fn day ->  end)

    characters = Core.list_characters_assoc()
    narratives = Cj.Core.list_narratives()
    journals = Cj.Core.list_journals()
    traits = Cj.Core.list_traits()

    # strftime_str = Timex.format!(datetime, "%y-%m-%d %H:%M", :strftime) # "%Y-%m-%d %H:%M:%S"
    render conn, CjWeb.AppView, "initial_state.json", timeline: timeline, characters: characters, traits: traits, narratives: narratives, journals: journals, user: user
  end
end