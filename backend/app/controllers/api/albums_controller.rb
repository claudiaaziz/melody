class Api::AlbumsController < ApplicationController 
  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find(params[:id])
  end

  private

  def album_params
    params.require(:album).permit(:title, :artist_id, :release_year, :album_cover_url)
  end
end
