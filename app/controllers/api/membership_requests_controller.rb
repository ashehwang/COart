class Api::MembershipRequestsController < ApplicationController

    before_action :require_login, only: [:create, :destroy]
    
    def create
        @membership_request = MembershipRequest.new(membership_request_params)
        if @membership_request.save
            render :show
        else
            render json: @membership_request.errors, status: 422
        end
    end

    def destroy
        @membership_request = MembershipRequest.find(params[:id])

        if @membership_request.destroy
            render :show
        else
            render json: @friend_request.errors, status: 422
        end
    end

    private

    def membership_request_params
        params.require(:membership_request).permit(:user_id, :admin_id, :community_id, :character_id)
    end
end
