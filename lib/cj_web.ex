defmodule CjWeb do
  @moduledoc """
  The entrypoint for defining your web interface, such
  as controllers, views, channels and so on.

  This can be used in your application as:

      use CjWeb, :controller
      use CjWeb, :view

  The definitions below will be executed for every view,
  controller, etc, so keep them short and clean, focused
  on imports, uses and aliases.

  Do NOT define functions inside the quoted expressions
  below. Instead, define any helper function in modules
  and import those modules here.
  """

  def controller do
    quote do
      use Phoenix.Controller, namespace: CjWeb
      import Plug.Conn
      import CjWeb.Router.Helpers
      import CjWeb.Gettext
    end
  end

  def view do
    quote do
      use Phoenix.View, root: "lib/cj_web/templates",
                        namespace: CjWeb

      # Import convenience functions from controllers
      import Phoenix.Controller, only: [get_flash: 2, view_module: 1]

      # Use all HTML functionality (forms, tags, etc)
      use Phoenix.HTML

      import CjWeb.Router.Helpers
      import CjWeb.ErrorHelpers
      import CjWeb.Gettext

      def render_partial(template, assigns \\ []) do
        render(CjWeb.PartialView, template, assigns)
      end            

      def js_script_tag do
        if Mix.env == :prod do
          ~s(<script src="/js/app.js"></script>)
        else
          ~s(<script src="http://localhost:8080/js/app.js"></script>)
        end
      end

      def css_link_tag do
        if Mix.env == :prod do
          ~s(<link rel="stylesheet" type="text/css" href="/css/app.css" media="screen,projection" />)
        else
          ""
        end
      end
    end
  end

  def router do
    quote do
      use Phoenix.Router
      import Plug.Conn
      import Phoenix.Controller
    end
  end

  def channel do
    quote do
      use Phoenix.Channel
      import CjWeb.Gettext
    end
  end

  @doc """
  When used, dispatch to the appropriate controller/view/etc.
  """
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
