class User < ApplicationRecord

    has_many :reviews, dependent: :destroy
    has_many :noodles, through: :reviews 

    has_secure_password

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true 

end
