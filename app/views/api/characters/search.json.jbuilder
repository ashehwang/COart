# json.characters do
    @characters.each do |character|
        json.set! character.id do
            json.extract! character, :id, :first_name, :last_name
            json.creator do
                json.extract! character.user, :id, :user_name, :nick_name
            end
            if character.head_photo.attached?
                json.headPhotoUrl url_for(character.head_photo)
            else
                json.headPhotoUrl "https://i.ibb.co/K9PYxTP/ahri2.jpg"
            end
        end
    end
# end

# json.users do
#     @users.each do |user|
#         json.set! user.id do
#             json.extract! user, :id, :user_name, :nick_name
#         end
#     end
# end