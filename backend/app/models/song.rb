class Song < ApplicationRecord
  validates :title, :song_url, presence: true

  belongs_to :album
  has_one :artist through: :album
end