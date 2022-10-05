class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :noodle_rating, :noodle_comment, :toppings_rating, :toppings_comment, :spice_rating, :overall_rating, :overall_comment, :noodle, :user
  
  # adding noodle and user in attributes make these attributes available to other serializers accessing reviews through association
  
  has_one :user
  has_one :noodle
end
