class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :character_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_column :characters, :num_follows, :integer, default: 0, null: false
    add_column :characters, :community_id, :integer, default: 0
    add_column :characters, :intro, :string
    add_index :follows, [:user_id, :character_id], unique: true
  end
end
