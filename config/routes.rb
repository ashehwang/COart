Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do

    resource :session, only: [:create, :destroy]
    
    resources :users, only: [:create, :index, :show, :update] do
      collection do
        get "search"
        get "fetch"
      end
    end

    resources :characters, only: [:create, :index, :show, :update, :destroy] do
      member do
        patch :select, to: "characters#select", as: "select"
        post :follow, to: "characters#follow", as: "follow"
        post :unfollow, to: "characters#unfollow", as: "unfollow"
      end
      collection do
        get "search"
      end
    end

    resources :board_posts, only: [:index, :create, :show, :destroy, :update] do
      # resources :board_comments, only: [:index]
    end

    resources :character_posts, only: [:index, :create, :show, :destroy, :update] do
      # resources :comments, only: [:index]
    end

    resources :posts, only: [:index, :create, :show, :destroy, :update] do
      # resources :user_comments, only: [:index]
    end

    resources :comments, only: [:destroy, :update, :create]
    resources :user_comments, only: [:destroy, :update, :create]
    resources :board_comments, only: [:destroy, :update, :create]
    # resources :friend_requests, only: [:create, :destroy]
    # resources :friends, only: [:create, :destroy]
    resources :membership_requests, only: [:create, :destroy]
    resources :memberships, only: [:create, :destroy]

    resources :communities, only: [:index, :create, :show, :destroy, :update] do
      member do
        post :follow, to: "communities#follow", as: "follow"
        post :unfollow, to:"communities#unfollow", as: "unfollow"
      end
      # collection do
      #   get "search"
      # end
    end

  end

end
