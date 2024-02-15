class Api::AlbumsController < ApplicationController 
  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id]) 
    # working on getting page not found to trigger
    # if @album
    #   render :show
    # else
    #   render json: { errors: @album.errors.full_messages }, status: :unprocessable_content
    # end
  end

  private

  def album_params
    params.require(:album).permit(:title, :artist_id, :release_year, :album_cover_url)
  end
end