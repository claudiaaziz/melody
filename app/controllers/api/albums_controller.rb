class Api::AlbumsController < ApplicationController 
  def index
    @albums = Album.all
  end

  def show
    @album = Album.find_by_id(params[:id])

    if @album && @album.id.to_s == params[:id] 
      render :show
    else
      render json: { error: "Album not found" }, status: :not_found
    end
  end

  # private

  # def album_params
  #   params.require(:album).permit(:title, :artist_id, :release_year, :album_cover_url)
  # end
end