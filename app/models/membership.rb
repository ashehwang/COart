class Membership < ApplicationRecord

    validates :community_id, :character_id, presence: true

    belongs_to :character
    belongs_to :community #not sure if needed can delete after..

end
