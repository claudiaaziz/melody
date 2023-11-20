json.extract! @playlist, :id, :user_id, :name

  json.songs do
    @playlist.playlist_songs.each do |playlist_song|
      json.extract! playlist_song, :id, :

        # json.extract! playlist_song.song, :id, :title, :song_url, :album_id
    end
  end
