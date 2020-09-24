json.extract! @board_post, :id, :title, :body, :user_id, :tag_id, :community_id, :notice
json.photoUrl url_for(@board_post.photo) if @board_post.photo.attached?