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

    has_one :sent_membership_request,
    foreign_key: :character_id,
    class_name: :MembershipRequest,
    dependent: :destroy

    has_one :membership,
    dependent: :destroy

    has_one :community,
    through: :membership,
    source: :community

    # has_many :comments,
    # dependent: :destroy

    def eligible
        return false if self.sent_membership_request
        return false if self.membership
        return true
    end

end