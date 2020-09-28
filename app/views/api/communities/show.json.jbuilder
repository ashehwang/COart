json.extract! @community, :id, :admin_id, :name, :status, :recruiting, :visibility, :intro, :detail
json.admin do
    json.extract! community.admin, :id, :user_name, :nick_name
end
json.logoUrl url_for(@community.logo) if @community.logo.attached?
json.imageUrl url_for(@community.image) if @community.image.attached?