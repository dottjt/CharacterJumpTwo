defmodule CjWeb.PageController do
  use CjWeb, :controller
  
  alias Coherence.Config
  alias Coherence.ControllerHelpers, as: Helpers

  def index(conn, _params) do
    user_schema = Config.user_schema
    cs = Helpers.changeset(:registration, user_schema, user_schema.__struct__)

    render conn, "index.html", email: "", changeset: cs, layout: {CjWeb.LayoutView, "homepage.html"}
  end


  # INTRODUCTION
  def guides(conn, _params) do
    render conn, "guides.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_existing_approaches(conn, _params) do
    render conn, "guides_existing_approaches.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_existing_approaches_limitations(conn, _params) do
    render conn, "guides_existing_approaches_limitations.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_my_approach(conn, _params) do
    render conn, "guides_my_approach.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end


  # CHARACTERS
  def guides_understanding_characters(conn, _params) do
    render conn, "guides_understanding_characters.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_genuine_meaning(conn, _params) do
    render conn, "guides_genuine_meaning.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_genuine_benefits(conn, _params) do
    render conn, "guides_genuine_benefits.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end


  def guides_identifying_characters(conn, _params) do
    render conn, "guides_identifying_characters.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_eliminating_characters(conn, _params) do
    render conn, "guides_eliminating_characters.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_example_characters(conn, _params) do
    render conn, "guides_example_characters.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end

  # FINAL 
  def guides_strategy_limitations(conn, _params) do
    render conn, "guides_strategy_limitations.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_end_game(conn, _params) do
    render conn, "guides_end_game.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end
  def guides_external_resources(conn, _params) do
    render conn, "guides_external_resources.html", layout: {CjWeb.LayoutView, "guides_layout.html"}
  end


  # COMMUNITY
  def community(conn, _params) do
    render conn, "community.html"
  end

  def dashboard(conn, _params) do
    render conn, "dashboard.html", layout: {CjWeb.LayoutView, "react.html"}
  end

end



# defp rememberable_enabled? do
#   if Config.user_schema.rememberable?(), do: true, else: false
# end


# def signup(conn, __params) do
#   user_schema = Config.user_schema
#   cs = Helpers.changeset(:registration, user_schema, user_schema.__struct__)

#   render CjWeb.Coherence.RegistrationView, "new.html", changeset: @changeset, conn: @conn
# end

# def login(conn, __params) do
#   login_field = Config.login_field()

#   conn
#     |> put_view(Module.concat(Config.web_module, Coherence.SessionView))
#     |> render(:new, [{login_field, ""}, remember: rememberable_enabled?()])
# end


