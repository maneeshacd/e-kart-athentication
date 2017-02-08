Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  root to: 'main#dashboard'
  get '/sign_in', to: 'main#dashboard'
  get '/sign_up', to: 'main#dashboard'
  get '/users', to: 'main#dashboard'
  post '/social_authentication', to: 'main#social_auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
