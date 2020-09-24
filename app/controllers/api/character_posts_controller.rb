class Api::CharacterPostsController < ApplicationController

    before_action :require_login, only: [:create, :update, :destroy]

    def index

        if params[:characterId]  #for receiving a specific character
            @character_posts = CharacterPost.where(character_id: params[:characterId])
                        .includes(:user, :character, comments: [:user]) #reduce N+1 query
                        .order(updated_at: :desc)
            @character = Character.find(params[:characterId])
            @user = @character.user
            render :index
        else #for receiving all characters in the main feed
            @character_posts = CharacterPost.includes(:user, :character, comments: [:user]) #reduce N+1 query
                        .where(visibility: "public")
                        .order(updated_at: :desc)
            render :main
        end
    end

    def show
        @character_post = CharacterPost.find_by(id: params[:id])
        render :show
    end

    def create
        @character_post = CharacterPost.new(character_post_params)
        if @character_post.save
            render :show
        else
            render json: { "character_post": "You cannot have an empty post." }, status: 422
        end
    end

    def destroy
        @character_post = CharacterPost.find_by(id: params[:id])
        if @character_post.destroy
            render :show
        else
            render json: @character_post.errors, status: 422
        end
    end

    def update
        @character_post = CharacterPost.find_by(id: params[:id])
        if @character_post.update(character_post_params)
            render :show
        else
            render json: @character_post.errors, status: 422
        end
    end

    # def like
    #     @like = Like.new(likeable_type: "Post", likeable_id: params[:id])
    #     @like.user_id = current_user.id
    #     @post = Post.find_by(id: params[:id])
    #     if @like.save
    #         render :show
    #     else
    #         render json: @like.errors, status: 422
    #     end
    # end

    # def unlike
    #     @like = Like.find_by(user_id: current_user.id, likeable_id: params[:id], likeable_type: "Post")
    #     @post = Post.find_by(id: params[:id])
    #     if @like.destroy
    #     render :show
    #     else
    #     render json: @like.errors.full_messages, status: :unprocessable_entity
    #     end
    # end

    private

    def character_post_params
        params.require(:character_post).permit(:body, :photo, :character_id, :user_id, :visibility)
    end

end
