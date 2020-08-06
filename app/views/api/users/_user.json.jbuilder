
json.users do 
    json.set! user.id do
        json.extract! user, :id, :user_name, :nick_name, :bio
        # json.profilePhotoUrl url_for(user.profile_photo) if user.profile_photo.attached?
    end
end

json.session do 
    json.extract! user, :id, :user_name, :nick_name, :bio
end