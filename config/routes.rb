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
      resources :board_comments, only: [:index]
    end
    resources :board_comments, only: [:destroy, :update, :create]
    resources :comments, only: [:destroy, :update, :create]
    resources :friend_requests, only: [:create, :destroy]
    resources :friends, only: [:create, :destroy]
    resources :character_posts, only: [:index, :create, :show, :destroy, :update] do
      resources :comments, only: [:index]
    end

    resources :communities, only: [:index, :create, :show, :destroy, :update]
    resources :membership_requests, only: [:create, :destroy, :index]
    resources :memberships, only: [:create, :destroy, :index]

  end

end
