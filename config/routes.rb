Rails.application.routes.draw do

  get '/hello', to: 'application#hello_world'
  
  resources :reviews
  resources :noodles
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
