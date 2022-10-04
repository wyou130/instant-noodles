class ChangeRatingsToFloats < ActiveRecord::Migration[7.0]
  def change
    change_column :reviews, :noodle_rating, :float
    change_column :reviews, :toppings_rating, :float
    change_column :reviews, :spice_rating, :float
    change_column :reviews, :overall_rating, :float
  end
end
