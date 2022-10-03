class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image, :email 
end
