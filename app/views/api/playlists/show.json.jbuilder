json.playlist do 
  json.extract! @playlist, :id, :name, :user_id, :created_at, :updated_at
    json.set! 'playlist_songs' do
      json.array! @playlist.playlist_songs.pluck(:song_id, :id)
  end
end

# json.playlist do 
#   json.extract! @playlist, :id, :name, :user_id, :created_at, :updated_at
#     json.playlist_songs do
#         @playlist.playlist_songs.each do |playlist_song| 
#           json.set! playlist_song.id.to_s do 
#             json.playlist_song playlist_song
#           end
#         end
#     end
# end
