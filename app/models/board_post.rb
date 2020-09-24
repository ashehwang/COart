class BoardPost < ApplicationRecord

    validates :user_id, :body, :title, presence: true

    belongs_to :user
    
    has_one_attached :photo
    
    # has_many :comments,
    # dependent: :destroy

    # has_many :likes,
    # as: :likeable,
    # dependent: :destroy

    # has_many :liked_users,
    # through: :likes,
    # source: :user

end
