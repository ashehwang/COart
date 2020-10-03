class Api::MembershipsController < ApplicationController

    before_action :require_login, only: [:create, :destroy]

    def create
        @membership = Membership.new(membership_params)
        if @membership.save
            render :show
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    def destroy
        @membership = Membership.find(params[:id])
        if @membership.destroy
            render :show
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    private

    def membership_params
        params.require(:membership).permit(:character_id, :community_id)
    end

end
