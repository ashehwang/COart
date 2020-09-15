class Character < ApplicationRecord

    validates :user_id, :first_name, presence: true

    belongs_to :user
    
    has_one_attached :head_photo,
    optional: true

    has_one_attached :body_photo,
    optional: true
    
    # has_many :comments,
    # dependent: :destroy

end