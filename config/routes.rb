Rails.application.routes.draw do

  # Routes from setup guide
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  # Signup route
  post '/signup', to: 'users#create'

  # Login route, goes to sessions#create because creating a new session with each login 
  post '/login', to: 'sessions#create'

  # Logout route 
  delete '/logout', to: 'sessions#destroy'

  # Allows users to stay logged in by showing just that one user 
  get '/me', to: 'users#show'

  resources :reviews
  resources :noodles
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
