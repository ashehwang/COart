json.characterPosts do
    @character_posts.each do |character_post|
        json.set! character_post.id do
            json.extract! character_post, :id, :user_id, :character_id, :body, :visibility, :created_at
            json.photoUrl url_for(character_post.photo) if character_post.photo.attached?
        end
    end
end

json.characters do
    # character = @character_posts[0].character
    json.extract! @character, :id, :user_id, :first_name, :last_name, :bio
    json.creator do
        json.extract! @character.user, :id, :user_name, :nick_name
    end
    if @character.head_photo.attached?
        json.headPhotoUrl url_for(@character.head_photo)
    else
        json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
    end
    json.bodyPhotoUrl url_for(@character.body_photo) if @character.body_photo.attached?
end