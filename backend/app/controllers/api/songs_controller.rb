class Api::SongsController < ApplicationController 
  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
  end

  private

  def song_params
    params.require(:album).permit(:title, :album_id, :song_url)
  end
end
