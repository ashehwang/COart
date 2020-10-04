json.extract! @message, :id, :user_id, :sender_id, :body, :seen
json.author do
    json.extract! @message.sender, :id, :nick_name, :user_name
end