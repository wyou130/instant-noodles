class CreateNoodles < ActiveRecord::Migration[7.0]
  def change
    create_table :noodles do |t|
      t.string :brand
      t.string :flavor
      t.string :image
      t.string :birthplace
      t.string :style

      t.timestamps
    end
  end
end
