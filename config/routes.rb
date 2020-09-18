Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :index, :show, :update] do
      collection do
        get "search"
      end
    end

    resources :characters, only: [:create, :index, :show, :update] do
      member do
        patch :select, to: 'characters#select', as: "select"
      end
      collection do
        get "search"
      end
    end

    resources :posts, only: [:index, :create, :show, :destroy, :update] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:destroy, :update, :create]
    resources :friend_requests, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy]
    resources :character_posts, only: [:index, :create, :show, :destroy, :update] do
      resources :character_comments, only: [:index]
    end

  end

end
