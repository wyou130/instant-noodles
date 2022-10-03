class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :noodle_rating, :noodle_comment, :toppings_rating, :toppings_comment, :spice_rating, :overall_rating, :overall_comment
  has_one :user
  has_one :noodle
end
