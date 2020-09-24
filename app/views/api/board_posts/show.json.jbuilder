json.extract! @board_post, :id, :title, :body, :user_id, :tag_id, :community_id, :notice, :updated_at
json.photoUrl url_for(@board_post.photo) if @board_post.photo.attached?
json.author do
    json.extract! @board_post.user, :id, :user_name, :nick_name
end