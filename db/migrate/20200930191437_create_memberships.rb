class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :community_id
      t.integer :character_id
      t.string :status, default: "PC"
      t.timestamps
    end

    remove_column :characters, :community_id
    add_column :character_posts, :reference_id, :integer

  end
end