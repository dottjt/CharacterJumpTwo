defmodule CjWeb.Router do
  use CjWeb, :router
  use Coherence.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Coherence.Authentication.Session
  end

  pipeline :protected do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Coherence.Authentication.Session, protected: true 
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session    
    plug Coherence.Authentication.Session     
  end

  scope "/" do
    pipe_through :browser
    coherence_routes()
  end

  scope "/dashboard" do
    pipe_through :protected
    coherence_routes :protected
  end

  scope "/", CjWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/login", PageController, :login
    get "/signup", PageController, :signup

    # INTRODUCTION
    get "/guides", PageController, :guides    
    get "/guides/existing-approaches", PageController, :guides_existing_approaches
    get "/guides/existing-approaches-limitations", PageController, :guides_existing_approaches_limitations
    get "/guides/my-approach", PageController, :guides_my_approach

    # CHARACTERS
    get "/guides/understanding-characters", PageController, :guides_understanding_characters
    get "/guides/genuine-meaning", PageController, :guides_genuine_meaning
    get "/guides/genuine-benefits", PageController, :guides_genuine_benefits

    get "/guides/identifying-characters", PageController, :guides_identifying_characters
    get "/guides/eliminating-characters", PageController, :guides_eliminating_characters
    get "/guides/example-characters", PageController, :guides_example_characters
    
    # FINAL
    get "/guides/strategy-limitations", PageController, :guides_strategy_limitations
    get "/guides/end-game", PageController, :guides_end_game
    get "/guides/external-resources", PageController, :guides_external_resources
    
  end

  # Other scopes may use custom stacks.
  scope "/api", CjWeb do
    pipe_through :api

    get "/initial_state", AppController, :initial_state

    resources "/users", UserController    
    resources "/days", DayController, except: [:new, :edit]
    resources "/characters", CharacterController, except: [:new, :edit]
    resources "/journals", JournalController, except: [:new, :edit]
    resources "/additional", AdditionalController, except: [:new, :edit]
    resources "/traits", TraitController, except: [:new, :edit]
    resources "/narratives", NarrativeController, except: [:new, :edit]
    resources "/jumps", JumpController, except: [:new, :edit]
  end

  scope "/dashboard", CjWeb do 
    pipe_through :protected

    get "/", PageController, :dashboard
    get "/:any", PageController, :dashboard
    get "/:any/:any", PageController, :dashboard
    get "/:any/:any/:any", PageController, :dashboard

  end

end
