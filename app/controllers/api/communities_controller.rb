class Api::CommunitiesController < ApplicationController

    before_action :require_login, only: [:create, :destroy, :update]

    def index
        if params[:worldUrl]
            @community = Community
                            .includes(:members => [:membership, :user])
                            .includes(:membership_requests)
                            .includes(:applying_characters => [:user])
                            .find_by(url: params[:worldUrl]) #reduce N+1 query
            @character_posts = CharacterPost.where(reference_id: @community.id)
            render :show
        else            
            @communities = Community.where(visibility: "public")
                                    .includes(:admin)
        end
    end

    # def show
    #     @community = Community.find_by(id: params[:id])
    #     render :show
    # end

    def create
        @community = Community.new(community_params)
        @community.admin_id = current_user.id
        if @community.save
            render :new
        else
            render json: @community.errors, status: 422
        end
    end

    def destroy
        @community = Community.find_by(id: params[:id])
        if @community.destroy
            render :new
        else
            render json: @community.errors, status: 422
        end
    end

    def update
        @community = Community.find_by(id: params[:id])
        if @community.update(community_params)
            render :update
        else
            render json: @community.errors, status: 422
        end
    end

    private

    def community_params
        params.require(:community).permit(:admin_id, :name, :status, :recruiting, :visibility, :intro, :detail, :logo, :image, :url)
    end
end
