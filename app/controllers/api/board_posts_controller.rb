class Api::BoardPostsController < ApplicationController

    before_action :require_login, only: [:create, :destroy, :update]

    def index
        @board_posts = BoardPost.where(tag_id: params[:tagId])
                                .includes(:user) #reduce N+1 query
        render :index
    end

    def show
        @board_post = BoardPost.find_by(id: params[:id])
                            # .includes(:user, board_comments: [:user])
    end

    def create
        @board_post = BoardPost.new(board_post_params)
        @board_post.user_id = current_user.id
        if @board_post.save
            render :show
        else
            render json: @board_post.errors, status: 422
        end
    end

    def destroy
        @board_post = BoardPost.find_by(id: params[:id])
        if @board_post.destroy
            render :show
        else
            render json: @board_post.errors, status: 422
        end
    end

    def update
        @board_post = BoardPost.find_by(id: params[:id])
        if @board_post.update(board_post_params)
            render :update
        else
            render json: @board_post.errors, status: 422
        end
    end

    private

    def board_post_params
        params.require(:board_post).permit(:body, :photo, :title, :tag_id, :community_id, :notice, :user_id)
    end

end
