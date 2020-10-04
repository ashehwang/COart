class Api::MessagesController < ApplicationController

    def index
        @messages = Message.where(user_id: params[:user_id])
        render :index
    end

    def create
        @message = Message.new(message_params)
        if @message.save
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end 

    def destroy
        @message = Message.includes(:sender)
                          .find(params[:id])
        if @message.destroy
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @message = Message.includes(:sender)
                          .find(params[:id])
        if @message.update(message_params)
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :user_id, :sender_id, :seen)
    end

end
