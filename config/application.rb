require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module EKartDevise
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.to_prepare do
      DeviseController.respond_to :html, :json
    end
    config.after_initialize do |app|
      app.assets.context_class.class_eval do
        include ApplicationHelper
        include ActionView::Helpers
        include Rails.application.routes.url_helpers
      end
    end
  end
end
