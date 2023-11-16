class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false, index: true
      t.references :artist, foreign_key: true, null: false
      t.integer :release_year, null: false
      t.string :album_cover_url, null: false
      t.timestamps
    end
  end
end
