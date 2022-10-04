# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_04_212653) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "noodles", force: :cascade do |t|
    t.string "brand"
    t.string "flavor"
    t.string "image"
    t.string "birthplace"
    t.string "style"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.float "noodle_rating"
    t.string "noodle_comment"
    t.float "toppings_rating"
    t.string "toppings_comment"
    t.float "spice_rating"
    t.string "spice_comment"
    t.float "overall_rating"
    t.string "overall_comment"
    t.bigint "user_id", null: false
    t.bigint "noodle_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["noodle_id"], name: "index_reviews_on_noodle_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.string "email"
  end

  add_foreign_key "reviews", "noodles"
  add_foreign_key "reviews", "users"
end
