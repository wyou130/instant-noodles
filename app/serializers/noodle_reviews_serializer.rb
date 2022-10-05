class NoodleReviewsSerializer < ActiveModel::Serializer
  
  # for show route fetched by NoodleDetails component
  
  attributes :id, :brand, :flavor, :image, :birthplace, :style, :average_reviews

  # putting association here uses the ReviewSerializer
  has_many :reviews

  def average_reviews
    object.reviews.average(:overall_rating)
  end

end
