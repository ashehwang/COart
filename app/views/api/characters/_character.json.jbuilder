json.extract! character, :id, :first_name, :last_name, :bio, :selected
json.headPhotoUrl url_for(character.head_photo) if character.head_photo.attached?
json.bodyPhotoUrl url_for(character.body_photo) if character.body_photo.attached?
json.creater do
    json.extract! character.user, :id, :user_name, :nick_name
end