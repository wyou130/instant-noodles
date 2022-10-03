class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image
end
