class Community < ApplicationRecord

    validates :admin_id, :name, :url, presence: true
    validates :url, :name, uniqueness: true

    belongs_to :admin,
    class_name: :User

    has_many :membership_requests
    has_many :applying_characters,
    through: :membership_requests,
    source: :character

    has_many :memberships

    has_many :members,
    through: :memberships,
    source: :character #refers to characters belonging to this community

    has_one_attached :logo
    has_one_attached :image

end