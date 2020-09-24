@board_posts.each do |board_post|
    json.set! board_post.id do
        json.extract! board_post, :id, :user_id, :title, :body, :tag_id, :community_id, :notice, :updated_at
        json.photoUrl url_for(board_post.photo) if board_post.photo.attached?
        json.author do
            json.extract! board_post.user, :id, :user_name, :nick_name
        end
    end
end