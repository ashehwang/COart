@communities.each do |community|
    json.set! community.id do
        json.extract! community, :id, :admin_id, :name, :status, :recruiting, :visibility, :intro, :detail, :url, :created_at, :applying_character_ids
        json.admin do
            json.extract! community.admin, :id, :user_name, :nick_name
        end
        json.logoUrl url_for(community.logo) if community.logo.attached?
        json.imageUrl url_for(community.image) if community.image.attached?
    end
end