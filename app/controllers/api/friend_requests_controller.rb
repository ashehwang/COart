class Api::FriendRequestsController < ApplicationController

    def create
        @friend_request = FriendRequest.new(friend_request_params)
        if @friend_request.save
            render :show
        else
            render json: @friend_request.errors, status: 422
        end
    end

    def destroy
        @friend_request = FriendRequest.find(params[:id])
        @matching_friend_request = FriendRequest.where(requestor_id: @friend_request.requestee_id).where(requestee_id: @friend_request.requestor_id)[0]

        if @matching_friend_request
            @matching_friend_request.destroy
        end

        if @friend_request.destroy
            render :show
        else
            render json: @friend_request.errors, status: 422
        end
    end

    private

    def friend_request_params
        params.require(:friendRequest).permit(:requestor_id, :requestee_id)
    end

end
