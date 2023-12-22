@playlists.each do |playlist|
    json.set! playlist.id do
        json.partial! "api/playlists/playlist", playlist: playlist
    end
end

# @playlists.each do |playlist|
#     json.set! playlist.id do
#         json.extract! playlist, :id, :user_id, :name
#     end
# end

# json.playlist do 
#   json.extract! @playlist, :id, :name, :user_id, 
#     json.set! 'playlist_songs' do
#       json.array! @playlist.playlist_songs.pluck(:song_id, :id)
#   end
# end