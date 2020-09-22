json.extract! @character_post, :id, :user_id, :character_id, :body, :visibility, :updated_at, :comment_ids
json.photoUrl url_for(@character_post.photo) if @character_post.photo.attached?