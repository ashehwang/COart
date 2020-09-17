class CharacterPost < ApplicationRecord

    validates :user_id, :character_id, presence: true

    belongs_to :user
    belongs_to :character
    
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
