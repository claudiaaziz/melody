class CreatePlaylists < ActiveRecord::Migration[7.0]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.bigint :user_id, null: false
      t.timestamps
    end
    add_index :playlists, :user_id
  end
end
