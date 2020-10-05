class CharacterPost < ApplicationRecord

    validates :user_id, :character_id, presence: true
    validate :photo_or_body_required

    belongs_to :user
    belongs_to :character

    belongs_to :community,
    foreign_key: :reference_id
    
    has_one_attached :photo
    
    has_many :comments,
    dependent: :destroy

    # has_many :likes,
    # as: :likeable,
    # dependent: :destroy

    # has_many :liked_users,
    # through: :likes,
    # source: :user

    private

    def photo_or_body_required
        unless self.photo.attached? || self.body.length > 0
            errors.add(:character_post, "must have body or photo")
            # render json: { "character_post": "Cannot create an empty post." }, status: 422
        end
    end

end
