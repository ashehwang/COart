json.extract! @post, :id, :user_id, :body, :updated_at, :visibility, :user_comment_ids
json.photoUrl url_for(@post.photo) if @post.photo.attached?