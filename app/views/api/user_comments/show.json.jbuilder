json.extract! @user_comment, :id, :post_id, :user_id, :body, :updated_at
json.author do
    json.extract! @user_comment.user, :id, :nick_name, :user_name
end