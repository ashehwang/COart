json.user do 
    json.extract! @user, :id, :user_name, :nick_name, :bio, :character_ids, :following_character_ids, :following_community_ids
    selected_character = @user.characters.detect { |char| char.selected }
    json.selected_id selected_character.id if selected_character

    if @user.photo.attached?
        json.photoUrl url_for(@user.photo) 
    else
        json.photoUrl "https://i.ibb.co/C59mJzN/ahri3.jpg"
    end
end

json.characters do
    @user.characters.each do |character|
        json.set! character.id do
            json.extract! character, :id, :first_name, :last_name, :bio, :selected, :eligible
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
                json.extract! @user, :id, :user_name, :nick_name
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
end

json.session do 
    json.extract! @current_user, :id, :user_name, :nick_name, :bio
end