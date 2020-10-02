class CreateWorldFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :world_follows do |t|
      t.integer "community_id", null: false
      t.integer "user_id", null: false
      t.timestamps
    end

    add_index :world_follows, [:user_id, :community_id], unique: true
    add_index :memberships, :community_id
    add_index :memberships, :character_id

  end
end
