class CreateBoardComments < ActiveRecord::Migration[5.2]
  def change
    create_table :board_comments do |t|
      t.integer :user_id, null: false
      t.integer :board_post_id, null: false
      t.text :body, null: false
      t.timestamps
    end

    add_index :board_comments, :user_id
    add_index :board_comments, :board_post_id
  end
end
