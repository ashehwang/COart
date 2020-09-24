class CreateBoardPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :board_posts do |t|
      t.integer "user_id", null: false
      t.string "title"
      t.text "body"
      t.integer "tag_id"
      t.integer "community_id"
      t.boolean "notice", default: false

      t.timestamps
    end

    add_index :board_posts, :user_id
    add_index :board_posts, :tag_id
    add_index :board_posts, :community_id
  end
end
