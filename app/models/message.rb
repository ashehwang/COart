class Message < ApplicationRecord

    validates :user_id, :sender_id, presence: true

    belongs_to :user #receiving user

    belongs_to :sender, #user who sent the message
    class_name: :User

end
