class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :sender_id, null: false
      t.text :body, null: false
      t.boolean :seen, default: false

      t.timestamps
    end

    add_index :messages, :user_id
    add_index :messages, :sender_id
  end
end
