json.characterPosts do
    @character_posts.each do |character_post|
        json.set! character_post.id do
            json.extract! character_post, :id, :user_id, :character_id, :body, :visibility, :updated_at, :comment_ids
            json.photoUrl url_for(character_post.photo) if character_post.photo.attached?
        end
    end
end

json.user do 
    json.extract! @user, :id, :user_name, :nick_name
end

json.character do
    # character = @character_posts[0].character
    json.extract! @character, :id, :user_id, :first_name, :last_name, :bio, :selected, :follower_ids, :eligible
    json.creator do
        json.extract! @character.user, :id, :user_name, :nick_name
    end
    if @character.head_photo.attached?
        json.headPhotoUrl url_for(@character.head_photo)
    else
        json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
    end
    if @character.body_photo.attached?
        json.bodyPhotoUrl url_for(@character.body_photo) 
    else
        json.bodyPhotoUrl nil
    end
    if @character.community
        json.community do
            json.extract! @character.community, :url, :name
            json.logoUrl url_for(@character.community.logo) if @character.community.logo.attached?
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