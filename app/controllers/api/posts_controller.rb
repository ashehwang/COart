class Api::PostsController < ApplicationController

    before_action :require_login, only: [:create, :update, :destroy]

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

    # def show
    #     @post = Post.find_by(id: params[:id])
    # end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post.destroy
            render :show
        else
            render json: @post.errors, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors, status: 422
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

    def post_params
        params.require(:post).permit(:body, :photo, :visibility)
    end

end