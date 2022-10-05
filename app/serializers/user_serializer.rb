class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :number_of_reviews
  
  def number_of_reviews
    object.reviews.length
  end

end
