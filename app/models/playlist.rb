# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Playlist < ApplicationRecord
    belongs_to :user
    has_many :playlist_songs, dependent: :destroy

    validates :name, presence: true, length: { minimum: 2 }
end
