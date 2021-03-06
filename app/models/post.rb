class Post < ApplicationRecord

    validates :user_id, :visibility, presence: true
    validate :photo_or_body_required

    belongs_to :user
    
    has_one_attached :photo
    
    has_many :user_comments,
    dependent: :destroy

    # has_many :likes,
    # as: :likeable,
    # dependent: :destroy

    # has_many :liked_users,
    # through: :likes,
    # source: :user

    def photo_or_body_required
        unless self.photo.attached? || self.body.length > 0
            errors.add(:post, "must have body or photo")
            # render json: { "character_post": "Cannot create an empty post." }, status: 422
        end
    end

end