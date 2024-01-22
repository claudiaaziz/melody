# json.partial! "api/playlist_songs/playlist_song", playlist_song: @playlist_song
json.extract! @playlist_song, :id, :playlist_id, :song_id
