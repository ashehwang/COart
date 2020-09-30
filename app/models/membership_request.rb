class MembershipRequest < ApplicationRecord

    validates :user_id, :character_id, :community_id, :admin_id, presence: true

    belongs_to :user
    belongs_to :character
    belongs_to :community

    belongs_to :admin,
    class_name: :User

end
