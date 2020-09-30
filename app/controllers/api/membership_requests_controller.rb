class Api::MembershipRequestsController < ApplicationController

    def index
    end
    
    def create
        @membership_request = MembershipRequest.new(membership_request_params)
        if @membership_request.save
            render :show
        else
            render json: @membership_request.errors, status: 422
        end
    end

    # def destroy
    #     @membership_request = MembershipRequest.find(params[:id])
    #     @matching_friend_request = FriendRequest.where(requestor_id: @membership_request.requestee_id).where(requestee_id: @friend_request.requestor_id)[0]

    #     if @matching_friend_request
    #         @matching_friend_request.destroy
    #     end

    #     if @friend_request.destroy
    #         render :show
    #     else
    #         render json: @friend_request.errors, status: 422
    #     end
    # end

    private

    def membership_request_params
        params.require(:membership_request).permit(:user_id, :admin_id, :community_id, :character_id, :status)
    end
end
