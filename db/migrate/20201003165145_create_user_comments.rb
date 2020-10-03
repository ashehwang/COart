class CreateUserComments < ActiveRecord::Migration[5.2]
  def change
    create_table :user_comments do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.string :body, null: false

      t.timestamps
    end

    remove_column :comments, :visibility
    remove_column :membership_requests, :status
    add_index :user_comments, :user_id
    add_index :user_comments, :post_id
  end
end
