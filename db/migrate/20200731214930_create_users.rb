class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :user_name, null: false
      t.string :nick_name, null: false
      t.text :bio
      t.timestamps
    end

    add_index :users, :session_token, unique: true
    add_index :users, :user_name, unique: true
  end
end
