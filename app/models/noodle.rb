class Noodle < ApplicationRecord

    has_many :reviews
    has_many :users, through: :reviews

    validates :brand, :flavor, :image, presence: true

end
