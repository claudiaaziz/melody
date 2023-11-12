class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title, null: false, index: true
      t.references :album, foreign_key: true, null: false
      t.string :song_url, null: false
      t.timestamps
    end
  end
end
