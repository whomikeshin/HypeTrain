class Api::ArtistsController < ApplicationController
  def create
    @artist = Artist.new(artist_params)
    if @artist.save
      render json: ["Artist was created"]
    else
      render json: @artist.errors.full_messages, status: 422
    end
  end

  def destroy
    @artist = Artist.find(params[:id])

    if @artist
      @artist.destroy
      render json: ["Arist was destroyed"]
    else
      render json: ["Artist does not exist"], status: 422
    end
  end

  def show
    @artist = Artist.find(params[:id])
  end

  private
  def artist_params
    params.require(:artist).permit(:name)
  end
end
