# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :bigint           not null
#  song_url   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
  validates :title, :song_url, presence: true

  belongs_to :album
  has_one :artist, through: :album
end
