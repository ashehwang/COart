class Api::CommentsController < ApplicationController

    # def index
    #     @character_post = CharacterPost.find(params[:character_post_id])
    #     @comments = @post.comments
    #     render :index
    # end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end 
    
    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    # def like
    #     @like = Like.new(likeable_type: "Comment", likeable_id: params[:id])
    #     @like.user_id = current_user.id
    #     @comment = Comment.find_by(id: params[:id])
    #     if @like.save
    #         render :show
    #     else
    #         render json: @like.errors, status: 422
    #     end
    # end

    # def unlike
    #     @like = Like.find_by(user_id: current_user.id, likeable_id: params[:id], likeable_type: "Comment")
    #     @comment = Comment.find_by(id: params[:id])
    #     if @like.destroy
    #     render :show
    #     else
    #     render json: @like.errors.full_messages, status: :unprocessable_entity
    #     end
    # end

    private

    def comment_params
        params.require(:comment).permit(:body, :user_id, :character_post_id)
    end

end
