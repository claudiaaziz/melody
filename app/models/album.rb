class Album < ApplicationRecord
  validates :title, :release_year, :album_cover_url, presence: true

  belongs_to :artist
  has_many :songs

  has_one_attached :album_cover
end
