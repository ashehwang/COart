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
        if @community.update(community_params) && params[:community][:recruiting] == "active"
            render :update
        elsif @community.update(community_params) && params[:community][:recruiting] == "inactive"
            @membership_requests = @community.membership_requests
            @membership_requests.each do |membership_request|
                membership_request.destroy
            end
            render :uppate
        else
            render json: @community.errors, status: 422
        end
    end

    def follow
        @follow = WorldFollow.new(community_id: params[:id])
        @follow.user_id = current_user.id
        @community = Community.find_by(id: params[:id])
        if @follow.save
            @community.num_follows += 1
            @community.save
            render :follow
        else
            render json: @follow.errors, status: 422
        end
    end

    def unfollow
        @follow = WorldFollow.find_by(user_id: current_user.id, community_id: params[:id])
        @community = Community.find_by(id: params[:id])
        if @follow.destroy
            @community.num_follows -= 1
            @community.save
            render :follow
        else
            render json: @follow.errors.full_messages, status: :unprocessable_entity
        end
    end

    # def search
    #     filter = params[:filter].downcase
    #     @characters = Character.where("LOWER(first_name) LIKE (?) OR LOWER(last_name) LIKE (?)", "%#{filter}%", "%#{filter}%")
    #     @users = User.where("LOWER(nick_name LIKE (?)", "%#{filter}")
    #     render :search
    # end

    private

    def community_params
        params.require(:community).permit(:admin_id, :name, :status, :recruiting, :visibility, :intro, :detail, :logo, :image, :url)
    end
end
