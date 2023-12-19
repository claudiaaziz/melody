# json.extract! @playlist, :id, :name, :user_id, :created_at, :updated_at

json.playlist do 
  json.extract! @playlist, :id, :name, :user_id, :created_at, :updated_at
    json.set! 'playlist_songs' do
      json.array! @playlist.playlist_songs.pluck(:song_id)
  end
end

# json.playlist_songs do 
#   @playlist.playlist_songs.each do |playlist_song|
#     json.set! playlist_song.id do
#       json.extract! playlist_song, :id, :playlist_id, :song_id
#     end
#   end
# end