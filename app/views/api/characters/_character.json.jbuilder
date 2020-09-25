json.extract! character, :id, :first_name, :last_name, :bio, :selected, :follower_ids
if character.head_photo.attached?
    json.headPhotoUrl url_for(character.head_photo)
else
    json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
end
# json.headPhotoUrl url_for(character.head_photo) if character.head_photo.attached?
if character.body_photo.attached?
    json.bodyPhotoUrl url_for(character.body_photo) 
else
    json.bodyPhotoUrl nil
end

json.creator do
    json.extract! character.user, :id, :user_name, :nick_name, :character_ids
end