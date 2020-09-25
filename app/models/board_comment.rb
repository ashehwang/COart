class BoardComment < ApplicationRecord

    validates :body, :user_id, :board_post_id, presence: true
    
    belongs_to :board_post
    belongs_to :user
    
end
