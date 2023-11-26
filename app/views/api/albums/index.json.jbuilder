@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :album_cover_url, :title
    json.set! 'artist_name', album.artist.name
    json.set! 'album_songs' do
      json.array! album.songs.pluck(:id)
    end
  end
end