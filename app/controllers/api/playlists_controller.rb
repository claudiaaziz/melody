class Api::PlaylistsController < ApplicationController 
  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end
end
