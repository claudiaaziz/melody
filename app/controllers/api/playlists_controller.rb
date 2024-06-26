class Api::PlaylistsController < ApplicationController 
    before_action :require_logged_in

    def index
        @playlists = current_user.playlists
    end

    def show
        @playlist = current_user.playlists.find_by_id(params[:id])

        if @playlist && @playlist.id.to_s == params[:id] 
            render :show
        else
            render json: { error: "Playlist not found" }, status: :not_found
        end
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
        render :show
        else
        render json: { errors: @playlist.errors.full_messages }, status: :unprocessable_content
        end
    end

    def update 
        @playlist = Playlist.find(params[:id])
        @playlist.update(playlist_params)
        render :show
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy 
    end

    private

    def playlist_params
        params.require(:playlist).permit(:name)
    end
end
