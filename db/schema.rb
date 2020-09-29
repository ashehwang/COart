# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_28_234859) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "board_comments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "board_post_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_post_id"], name: "index_board_comments_on_board_post_id"
    t.index ["user_id"], name: "index_board_comments_on_user_id"
  end

  create_table "board_posts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title"
    t.text "body"
    t.integer "tag_id"
    t.integer "community_id"
    t.boolean "notice", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["community_id"], name: "index_board_posts_on_community_id"
    t.index ["tag_id"], name: "index_board_posts_on_tag_id"
    t.index ["user_id"], name: "index_board_posts_on_user_id"
  end

  create_table "character_posts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "character_id", null: false
    t.text "body"
    t.string "visibility", default: "public", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_posts_on_character_id"
    t.index ["user_id"], name: "index_character_posts_on_user_id"
  end

  create_table "characters", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "first_name", null: false
    t.string "last_name"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "selected", default: false
    t.integer "num_follows", default: 0, null: false
    t.integer "community_id", default: 0
    t.string "intro"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "character_post_id", null: false
    t.string "body", null: false
    t.string "visibility", default: "public", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_post_id"], name: "index_comments_on_character_post_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "communities", force: :cascade do |t|
    t.integer "admin_id", null: false
    t.string "name", null: false
    t.string "status", default: "active"
    t.string "visibility", default: "public"
    t.text "intro"
    t.text "detail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "recruiting", default: "active"
    t.string "url", null: false
    t.index ["admin_id"], name: "index_communities_on_admin_id"
    t.index ["name"], name: "index_communities_on_name", unique: true
    t.index ["url"], name: "index_communities_on_url", unique: true
  end

  create_table "follows", force: :cascade do |t|
    t.integer "character_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "character_id"], name: "index_follows_on_user_id_and_character_id", unique: true
  end

  create_table "posts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "body"
    t.string "visibility", default: "public", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "user_name", null: false
    t.string "nick_name", null: false
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["user_name"], name: "index_users_on_user_name", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
