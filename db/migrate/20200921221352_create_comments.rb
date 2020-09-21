class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :character_post_id, null: false
      t.string :body, null: false
      t.string :visibility, null: false, default: "public"

      t.timestamps
    end

    add_index :comments, :user_id
    add_index :comments, :character_post_id
    add_index :character_posts, :user_id
    add_index :character_posts, :character_id
    add_index :characters, :user_id
    add_index :posts, :user_id
  end
end
