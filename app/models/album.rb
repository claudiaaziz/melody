# == Schema Information
#
# Table name: albums
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  artist_id       :bigint           not null
#  release_year    :integer          not null
#  album_cover_url :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Album < ApplicationRecord
  validates :title, :release_year, :album_cover_url, presence: true

  belongs_to :artist
  has_many :songs
end
