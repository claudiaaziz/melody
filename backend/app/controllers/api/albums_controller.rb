class Api::AlbumsController < ApplicationController 
  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
    # need access to all songs in album
    @songs = @album.songs
  end

  private

  def artist_params
    params.require(:album).permit(:title, :artist_id, :release_year, :album_cover_url)
  end
end
