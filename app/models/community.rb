class Community < ApplicationRecord

    validates :admin_id, :name, presence: true

    belongs_to :admin,
    class_name: :User

    # has_many :characters

    has_one_attached :logo
    has_one_attached :image

end