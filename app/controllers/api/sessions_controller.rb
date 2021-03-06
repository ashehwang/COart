class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:user_name], params[:user][:password])
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: {"login": "Invalid email / password. Please try again."}, status: 401
        end
    end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end
