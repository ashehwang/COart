json.characterPosts do
    @character_posts.each do |character_post|
        json.set! character_post.id do
            json.extract! character_post, :id, :user_id, :character_id, :body, :visibility, :updated_at, :comment_ids
            json.photoUrl url_for(character_post.photo) if character_post.photo.attached?
            if character_post.community
                json.community do
                    json.extract! character_post.community, :id, :url, :name
                end
            end
        end
    end
end

@character_posts.each do |character_post|
    json.comments do
        character_post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :user_id, :character_post_id, :body, :updated_at
                json.user do
                    json.extract! comment.user, :id, :user_name, :nick_name
                end
            end
        end
    end

    json.characters do
        @user.following_characters.each do |character|
            json.set! character.id do
                json.extract! character, :id, :first_name, :last_name, :bio, :selected, :eligible
                if character.head_photo.attached?
                    json.headPhotoUrl url_for(character.head_photo)
                else
                    json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
                end
                json.creator do
                    json.extract! character.user, :id, :user_name, :nick_name
                end
                json.membership_id character.membership.id if character.membership
                if character.community
                    json.community do
                        json.extract! character.community, :url, :name if character.community
                        json.logoUrl url_for(character.community.logo) if character.community.logo.attached?
                    end
                end
            end
        end
        json.set! character_post.character.id do
            json.extract! character_post.character, :id, :first_name, :last_name, :bio, :selected, :eligible
            if character_post.character.head_photo.attached?
                json.headPhotoUrl url_for(character_post.character.head_photo)
            else
                json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
            end
            json.creator do
                json.extract! character_post.user, :id, :user_name, :nick_name
            end
            json.membership_id character_post.character.membership.id if character_post.character.membership
            if character_post.character.community
                json.community do
                    json.extract! character_post.character.community, :url, :name if character_post.character.community
                    json.logoUrl url_for(character_post.character.community.logo) if character_post.character.community.logo.attached?
                end
            end
        end
    end

    json.communities do 
        @user.following_communities.each do |community|
            json.set! community.id do
                json.extract! community, :id, :url, :name
            end
        end
    end
end