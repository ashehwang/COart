class Api::UserCommentsController < ApplicationController

    before_action :require_login, only: [:create, :destroy, :update]

    def create
        @user_comment = UserComment.new(user_comment_params)
        @user_comment.user_id = current_user.id
        if @user_comment.save
            render :show
        else
            render json: @user_comment.errors.full_messages, status: 422
        end
    end 
    
    def update
        @user_comment = UserComment.find(params[:id])
        if @user_comment.update(user_comment_params)
            render :show
        else
            render json: @user_comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @user_comment = UserComment.find(params[:id])
        if @user_comment.destroy
            render :show
        else
            render json: @user_comment.errors.full_messages, status: 422
        end
    end

    private

    def user_comment_params
        params.require(:user_comment).permit(:body, :user_id, :post_id)
    end

end
