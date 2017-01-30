Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  root to: 'main#dashboard'
  get '/sign_in', to: 'main#dashboard'
  get '/sign_up', to: 'main#dashboard'
  get '/users', to: 'main#dashboard'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
