json.boardPost do
    json.extract! @board_post, :id, :title, :body, :user_id, :tag_id, :community_id, :notice, :updated_at, :board_comment_ids
    json.photoUrl url_for(@board_post.photo) if @board_post.photo.attached?
    json.author do
        json.extract! @board_post.user, :id, :user_name, :nick_name
    end
end

if @board_post.board_comment_ids.length > 1
    json.boardComments do 
        @board_post.board_comments.each do |board_comment|
            json.set! board_comment.id do
                json.extract! board_comment, :id, :board_post_id, :user_id, :body, :updated_at
                json.author do
                    json.extract! board_comment.user, :id, :nick_name, :user_name
                end
            end
        end
    end
end