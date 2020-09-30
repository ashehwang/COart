class CreateMembershipRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :membership_requests do |t|
      t.integer "user_id", null: false
      t.integer "character_id", null: false
      t.integer "community_id", null: false
      t.integer "admin_id", null: false
      t.string "status", default: "pending"
      t.timestamps
    end

    add_column :communities, :num_follows, :integer, default: 0
    add_index :membership_requests, :user_id
    add_index :membership_requests, :character_id
    add_index :membership_requests, :community_id
    add_index :membership_requests, :admin_id
  end
end
