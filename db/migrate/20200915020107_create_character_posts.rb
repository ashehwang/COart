class CreateCharacterPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :character_posts do |t|
      t.integer :user_id, null: false
      t.integer :character_id, null: false
      t.text :body
      t.string :visibility, null: false, default: "public"

      t.timestamps
    end
  end
end
