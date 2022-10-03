class Review < ApplicationRecord

  belongs_to :user
  belongs_to :noodle

  validates :overall_rating, presence: true
  validates :overall_comment, presence: true, length: { maximum: 500 }

end
