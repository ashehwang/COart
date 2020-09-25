class Api::BoardCommentsController < ApplicationController

    # def index
    #     @board_post = BoardPost.find(params[:board_post_id])
    #     @board_comments = @board_post.board_comments
    #     render :index
    # end

    def create
        @board_comment = BoardComment.new(board_comment_params)
        @board_comment.user_id = current_user.id
        if @board_comment.save
            render :show
        else
            render json: @board_comment.errors.full_messages, status: 422
        end
    end 
    
    def update
        @board_comment = BoardComment.find(params[:id])
        if @board_comment.update(board_comment_params)
            render :show
        else
            render json: @board_comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @board_comment = BoardComment.find(params[:id])
        if @board_comment.destroy
            render :show
        else
            render json: @board_comment.errors.full_messages, status: 422
        end
    end

    private

    def board_comment_params
        params.require(:board_comment).permit(:body, :user_id, :board_post_id)
    end

end
