class Comment < ApplicationRecord
    
    validates :body, :user_id, :character_post_id, presence: true
    
    belongs_to :character_post
    belongs_to :user
    
end
