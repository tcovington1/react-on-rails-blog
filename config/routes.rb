Rails.application.routes.draw do

  resources :api do
    resources :posts
  end

end
