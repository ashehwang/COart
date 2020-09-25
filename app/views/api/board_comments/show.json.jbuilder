json.extract! @board_comment, :id, :board_post_id, :user_id, :body, :updated_at
json.user do
    json.extract! @board_comment.user, :id, :nick_name, :user_name
end