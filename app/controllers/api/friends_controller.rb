class Api::FriendsController < ApplicationController

    def create
        @friend = Friend.new(friend_params)
        if @friend.save
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend = Friend.find(params[:id])
        @counter_friend = Friend.where(user_id: @friend.friend_id).where(friend_id: @friend.user_id)
        if @friend.destroy && @counter_friend[0].destroy
            render :show
        else
            render json: @friend.errors.full_messages, status: 422
        end
    end

    private

    def friend_params
        params.require(:friend).permit(:user_id, :friend_id)
    end

end
