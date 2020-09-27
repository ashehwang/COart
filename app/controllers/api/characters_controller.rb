class Api::CharactersController < ApplicationController

    before_action :require_login, only: [:create, :edit, :select, :update]

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
        @character = Character.new(character_params)
        @character.user_id = current_user.id
        @character.selected = true
        if @character.save
            if current_user.characters.count > 1
                other_selected_character = current_user.characters.detect { |char| char.selected }
                other_selected_character.selected = false
                other_selected_character.save
            end
            render :show
        else
            render json: @character.errors, status: 422
        end
    end

    def select
        @character = Character.find_by(id: params[:id])
        @character.selected = true
        @other_selected_character = current_user.characters.detect { |char| char.selected }
        @other_selected_character.selected = false
        @character.save
        @other_selected_character.save
        render :selected
    end

    def destroy
        @character = Character.find_by(id: params[:id])
        if @character.selected
            if @character.user.characters.count > 1 #has other character to select
                @other_character = @character.user.characters.find { |char| !char.selected }
                @other_character.selected = true
                @other_character.save
                @character.destroy #added
                render :remove #added
            else #this char was the only one character
                @character.destroy
                render :remove2
            end            
        else #char wasn't selected (and there will be another that is true)
            @other_character = @character.user.characters.find { |char| char.selected }
            @character.destroy #added
            render :remove #added
        end

        # if @character.destroy
        #     render :remove
        # else
        #     render json: @character.errors, status: 422
        # end
    end

    def update
        @character = Character.find_by(id: params[:id])
        @character.body_photo.purge if params["remove_body_photo"] == "true"
        @character.head_photo.purge if params["remove_head_photo"] == "true"
        if @character.update(character_params)
            render :show
        else
            render json: @character.errors, status: 422
        end
    end

    def follow
        @follow = Follow.new(character_id: params[:id])
        @follow.user_id = current_user.id
        @character = Character.find_by(id: params[:id])
        if @follow.save
            @character.num_follows += 1
            @character.save
            render :follow
        else
            render json: @follow.errors, status: 422
        end
    end

    def unfollow
        @follow = Follow.find_by(user_id: current_user.id, character_id: params[:id])
        @character = Character.find_by(id: params[:id])
        if @follow.destroy
            @character.num_follows -= 1
            @character.save
            render :follow
        else
            render json: @follow.errors.full_messages, status: :unprocessable_entity
        end
    end

    def search
        filter = params[:filter].downcase
        @characters = Character.where("LOWER(first_name) LIKE (?) OR LOWER(last_name) LIKE (?)", "%#{filter}%", "%#{filter}%")
        @users = User.where("LOWER(nick_name LIKE (?)", "%#{filter}")
        render :search
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

    def character_params
        params.require(:character).permit(:first_name, :last_name, :bio, :head_photo, :body_photo, :remove_head_photo, :remove_body_photo, :intro)
    end
end