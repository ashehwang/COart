json.community do
    json.extract! @community, :id, :admin_id, :name, :status, :recruiting, :visibility, :intro, :detail, :url, :membership_request_ids, :member_ids
    json.user_member_ids (@community.user_member_ids << @community.admin_id).uniq
    json.admin do
        json.extract! @community.admin, :id, :user_name, :nick_name
    end
    json.logoUrl url_for(@community.logo) if @community.logo.attached?
    json.imageUrl url_for(@community.image) if @community.image.attached?
end