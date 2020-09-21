json.extract! @comment, :id, :character_post_id, :user_id, :body, :updated_at, :visibility
json.user do
    json.extract! @comment.user, :id, :nick_name, :user_name
    # json.profilePhotoUrl url_for(@comment.user.profile_photo) if @comment.user.profile_photo.attached?
end