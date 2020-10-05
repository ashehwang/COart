class Api::PostsController < ApplicationController

    before_action :require_login, only: [:create, :update, :destroy]

    def index
        offset = (params[:numPages].to_i) * 3
        @posts = Post.includes(:user_comments)
                    .where(user_id: params[:userId])
                    .offset(offset)
                    .limit(3)
                    .order(updated_at: :desc)

        render :index
    end

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