json.extract! playlist, :id, :name, :user_id, :created_at, :updated_at
json.set! 'playlist_songs' do
    json.array! playlist.playlist_songs.pluck(:id, :song_id).map { |id, song_id| { playlist_song_id: id, song_id: song_id } }
end