@messages.each do |message|
    json.set! message.id do
        json.extract! message, :id, :user_id, :sender_id, :body, :created_at, :seen
        json.author do
            json.extract! message.sender, :id, :nick_name, :user_name
        end
    end
end