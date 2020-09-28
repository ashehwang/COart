class Api::CommunitiesController < ApplicationController

    before_action :require_login, only: [:create, :destroy, :update]

    # def index

    #     friends_ids = current_user.friendship_ids
    #     friends_ids << current_user.id

    #     if params[:userId] 
    #         @posts = Post.where(reference_id: params[:userId])
    #                     .includes(:user, comments: [:user]) #reduce N+1 query
    #         render :index
    #     else
    #         @posts = Post.includes(:user, comments: [:user]) 
    #                     .where(user_id: friends_ids)
    #                     .order(updated_at: :desc)
    #         @user = current_user
    #         render :index
    #     end
    # end

    def show
        @community = Community.find_by(id: params[:id])
        render :show
    end

    def create
        @community = Community.new(community_params)
        @community.admin_id = current_user.id
        if @community.save
            render :show
        else
            render json: @community.errors, status: 422
        end
    end

    def destroy
        @community = Community.find_by(id: params[:id])
        if @community.destroy
            render :show
        else
            render json: @community.errors, status: 422
        end
    end

    def update
        @community = Community.find_by(id: params[:id])
        if @community.update(community_params)
            render :show
        else
            render json: @community.errors, status: 422
        end
    end

    private

    def community_params
        params.require(:community).permit(:admin_id, :name, :status, :recruiting, :visibility, :intro, :detail, :logo)
    end
end
