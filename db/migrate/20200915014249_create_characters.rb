class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.integer :user_id, null: false
      t.string :first_name, null: false
      t.string :last_name
      t.text :bio

      t.timestamps
    end
  end
end