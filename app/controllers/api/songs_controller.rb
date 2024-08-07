class Api::SongsController < ApplicationController 
#   def index
#     @songs = Song.all
#   end

# def index
#     @songs = Rails.cache.fetch('all_songs') do
#       Song.all.to_a
#     end
#     render json: @songs
#   end

#   def index
#     @songs = Rails.cache.fetch('all_songs') do
#       Rails.logger.info "Fetching songs from database"
#       Song.all.to_a
#     end
#     Rails.logger.info "Fetching songs from cache" if Rails.cache.exist?('all_songs')
#   end

def index
    if Rails.cache.exist?('all_songs')
      Rails.logger.info "Fetching songs from cache"
      @songs = Rails.cache.read('all_songs')
    else
      Rails.logger.info "Fetching songs from database"
      @songs = Song.all.to_a
      Rails.cache.write('all_songs', @songs)
    end
  end

  def show
    @song = Song.find(params[:id])
  end

  private

#   def song_params
#     params.require(:album).permit(:title, :album_id, :song_url)
#   end
end
