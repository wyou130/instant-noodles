class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :noodle_rating
      t.string :noodle_comment
      t.integer :toppings_rating
      t.string :toppings_comment
      t.integer :spice_rating
      t.string :spice_comment 
      t.integer :overall_rating
      t.string :overall_comment
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :noodle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
