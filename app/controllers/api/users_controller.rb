class Api::UsersController < ApplicationController

    before_action :require_login, only: [:update, :show]

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors, status: 422
        end
    end

    def update
        @user = User.includes(:characters)
                    .find_by(id: params[:id])
        if @user.update(user_params)
            render :update
        end
    end

    def index
        @users = User.all 
        render :index
    end

    def show
        @user = User.includes(:characters) #reduce N+1 query
                    .find_by(id: params[:id])
        @current_user = current_user
        render :show
    end

    def fetch
        @user = User.includes(:characters)
                    .find_by(user_name: params[:username])
        @current_user = current_user
        if @user
            render :fetch
        else
            render json: @user.errors, status: 422
        end
    end

    # def search
    #     filter = params[:filter].downcase
    #     @users = User.where("LOWER(first_name) LIKE (?) OR LOWER(last_name) LIKE (?)", "%#{filter}%", "%#{filter}%")
    #     render :index
    # end

    private

    def user_params
        params.require(:user).permit(:password, :email, :user_name, :nick_name, :bio, :photo, :filter)
    end
end
