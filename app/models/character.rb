class Character < ApplicationRecord

    validates :user_id, :first_name, presence: true

    belongs_to :user
    
    has_one_attached :head_photo
    has_one_attached :body_photo

    has_many :character_posts,
    foreign_key: :character_id,
    class_name: :CharacterPost,
    dependent: :destroy

    has_many :follows

    has_many :followers,
    through: :follows,
    source: :user

    # has_many :comments,
    # dependent: :destroy

end