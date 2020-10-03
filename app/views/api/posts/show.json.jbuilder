json.extract! @post, :id, :user_id, :body, :updated_at, :visibility
json.photoUrl url_for(@post.photo) if @post.photo.attached?