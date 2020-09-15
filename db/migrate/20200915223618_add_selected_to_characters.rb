class AddSelectedToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :selected, :boolean, default: false;
  end
end
