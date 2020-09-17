
json.users do 
    json.set! user.id do
        json.extract! user, :id, :user_name, :nick_name, :bio, :character_ids
        selected_character = user.characters.detect { |char| char.selected }
        json.selected_id selected_character.id if selected_character
        # json.profilePhotoUrl url_for(user.profile_photo) if user.profile_photo.attached?
    end
end

json.characters do
    user.characters.each do |character|
        json.set! character.id do
            json.extract! character, :id, :first_name, :last_name, :bio, :selected
            json.headPhotoUrl url_for(character.head_photo) if character.head_photo.attached?
            json.bodyPhotoUrl url_for(character.body_photo) if character.body_photo.attached?
        end
    end
end

json.session do 
    json.extract! user, :id, :user_name, :nick_name, :bio
end