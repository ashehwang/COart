class ChangeDefault < ActiveRecord::Migration[5.2]
  def change
    remove_column :communities, :recruiting
    add_column :communities, :recruiting, :string, default: "active"
  end
end
