@characters.each do |character|
    json.set! character.id do
        json.extract! character, :id, :first_name, :last_name
        json.headPhotoUrl url_for(character.head_photo) if character.head_photo.attached?
    end
end