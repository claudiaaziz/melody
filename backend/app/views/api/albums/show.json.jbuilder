json.extract! @album, :id, :album_cover_url, :title, :release_year 
json.set! 'artist_name', @album.artist.name
json.set! 'album_songs' do
  json.array! @album.songs.pluck(:id)
end

json.songs do 
  @album.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :song_url
    end
  end
end

