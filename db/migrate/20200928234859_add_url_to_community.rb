class AddUrlToCommunity < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :url, :string, null: false
    add_index :communities, :url, unique: true
  end
end