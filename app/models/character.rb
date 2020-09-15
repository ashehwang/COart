class Character < ApplicationRecord

    validates :user_id, :first_name, presence: true

    belongs_to :user
    
    has_one_attached :head_photo
    has_one_attached :body_photo
    
    # has_many :comments,
    # dependent: :destroy

end