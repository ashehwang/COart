class Api::MembershipsController < ApplicationController

    def index
    end

    def create
        @membership = Membership.new(membership_params)
        if @membership.save
            render :show
        else
            render json: @membership.errors.full_messages, status: 422
        end
    end

    # def destroy
    #     @membership = Friend.find(params[:id])
    #     @counter_friend = Friend.where(user_id: @membership.friend_id).where(friend_id: @membership.user_id)
    #     if @membership.destroy && @counter_friend[0].destroy
    #         render :show
    #     else
    #         render json: @membership.errors.full_messages, status: 422
    #     end
    # end

    private

    def membership_params
        params.require(:membership).permit(:character_id, :community_id)
    end

end
