class NoodleSerializer < ActiveModel::Serializer
  attributes :id, :brand, :flavor, :image, :birthplace, :style, :average_reviews

  def average_reviews
    object.reviews.average(:overall_rating)
  end

end
