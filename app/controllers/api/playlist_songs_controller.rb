class Api::PlaylistSongsController < ApplicationController 
  # def index
  #   @playlist_songs = current_user.playlist_songs
  # end

  def show
    @playlist_song = PlaylistSong.find(params[:id])
  end

  def create
    @playlist_song = PlaylistSong.new(playlist_song_params)
    if @playlist_song.save
      render :show
    else
      render json: { errors: @playlist_song.errors.full_messages }, status: :unprocessable_content
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    @playlist_song.destroy 
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:song_id, :playlist_id)
  end
end