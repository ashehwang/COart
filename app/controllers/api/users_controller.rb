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
        @user = User.find_by(id: params[:id])
        @current_user = current_user
        render :show
    end

    # def search
    #     filter = params[:filter].downcase
    #     @users = User.where("LOWER(first_name) LIKE (?) OR LOWER(last_name) LIKE (?)", "%#{filter}%", "%#{filter}%")
    #     render :index
    # end

    private

    def user_params
        params.require(:user).permit(:password, :email, :user_name, :nick_name, :bio, :profile_photo, :filter)
    end
end
