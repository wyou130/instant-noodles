class UserReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image

  has_many :reviews 

end
