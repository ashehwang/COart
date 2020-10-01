json.community do
    json.extract! @community, :id, :admin_id, :name, :status, :recruiting, :visibility, :intro, :detail, :url, :membership_request_ids, :member_ids
    json.admin do
        json.extract! @community.admin, :id, :user_name, :nick_name
    end
    json.logoUrl url_for(@community.logo) if @community.logo.attached?
    json.imageUrl url_for(@community.image) if @community.image.attached?
end

json.membership_requests do
    @community.membership_requests.each do |membership_request|
        json.set! membership_request.id do
            json.extract! membership_request, :admin_id, :user_id, :character_id, :community_id, :status
        end
    end
end

json.characters do
    @community.applying_characters.each do |character|
        json.set! character.id do
            json.extract! character, :id, :first_name, :last_name, :bio, :selected, :follower_ids, :eligible
            if character.head_photo.attached?
                json.headPhotoUrl url_for(character.head_photo)
            else
                json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
            end
            if character.body_photo.attached?
                json.bodyPhotoUrl url_for(character.body_photo) 
            else
                json.bodyPhotoUrl nil
            end
            json.creator do
                json.extract! character.user, :id, :user_name, :nick_name, :character_ids
            end
        end
    end
    @community.members.each do |character|
        json.set! character.id do
            json.extract! character, :id, :first_name, :last_name, :bio, :selected, :follower_ids, :eligible
            if character.head_photo.attached?
                json.headPhotoUrl url_for(character.head_photo)
            else
                json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
            end
            if character.body_photo.attached?
                json.bodyPhotoUrl url_for(character.body_photo) 
            else
                json.bodyPhotoUrl nil
            end
            json.creator do
                json.extract! character.user, :id, :user_name, :nick_name, :character_ids
            end
            json.membership_id character.membership.id
        end
    end
end

json.characterPosts do
    @character_posts.each do |character_post|
        json.set! character_post.id do
            json.extract! character_post, :id, :user_id, :character_id, :body, :visibility, :updated_at, :comment_ids, :reference_id
            json.photoUrl url_for(character_post.photo) if character_post.photo.attached?
        end
    end
end

@character_posts.each do |character_post|
    json.comments do
        character_post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :user_id, :character_post_id, :body, :visibility, :updated_at
                json.user do
                    json.extract! comment.user, :id, :user_name, :nick_name
                end
            end
        end
    end
end

