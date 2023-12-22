json.extract! playlist, :id, :name, :user_id, :created_at, :updated_at
  json.set! 'playlist_songs' do
    json.array! playlist.playlist_songs.pluck(:song_id, :id)
end