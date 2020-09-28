class CreateCommunities < ActiveRecord::Migration[5.2]
  def change
    create_table :communities do |t|
      t.integer :admin_id, null: false
      t.string :name, null: false
      t.string :status, default: "active"
      t.string :recruiting, default: "acive"
      t.string :visibility, default: "public"
      t.text :intro
      t.text :detail

      t.timestamps
    end
    add_index :communities, :admin_id
    add_index :communities, :name, unique: true
  end
end
