class NoodleSerializer < ActiveModel::Serializer
  attributes :id, :brand, :flavor, :image, :birthplace, :style
end
