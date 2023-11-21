require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
  puts "Destroying tables..."
  User.destroy_all
  Artist.destroy_all
  Album.destroy_all
  Playlist.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating guest user..."
  User.create!(
    username: 'guest',
    email: 'guest@guest.com',
    password: 'guestpassword'
  )

  puts "Creating artists..."
  Artist.create!(
    name: "Sami Yusuf"
  )
  Artist.create!(
    name: "Joseph Attieh"
  )
  Artist.create!(
    name: "Mesut Kurtis"
  )
  Artist.create!(
    name: "Yara"
  )
  Artist.create!(
    name: "Najwa Karam"
  )
  Artist.create!(
    name: "Haife Wehbe"
  )

  puts "Creating albums..."
  Album.create!(
    title: "Al-Mu'allim",
    artist_id: 1,
    release_year: 2005,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Sami_Yusuf.png'
  )
  Album.create!(
    title: "Hobb W Mkattar",
    artist_id: 2,
    release_year: 2015,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Joseph_Attieh.png'
  )
  Album.create!(
    title: "Tabassam",
    artist_id: 3,
    release_year: 2015,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Mesut+Kurtis.png'
  )
  Album.create!(
    title: "Ya Ayech Bi Oyouni",
    artist_id: 4,
    release_year: 2016,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Yara.png'
  )
  Album.create!(
    title: "هلليله مافي نوم",
    artist_id: 5,
    release_year: 2011,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Najwa+Karam.png'
  )
  Album.create!(
    title: "Sapiential",
    artist_id: 1,
    release_year: 2020,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential.png'
  )
  Album.create!(
    title: "Hawwa",
    artist_id: 6,
    release_year: 2018,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Hawwa.png'
  )
  Album.create!(
    title: "My Ummah",
    artist_id: 1,
    release_year: 2005,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah.png'
  )

  puts "Creating songs..."
  # Al-Mu'allim
  Song.create!(
    title: "Al-Mu'allim",
    album_id: 1,
    song_url: "song1"
  )
  Song.create!(
    title: "Who Is The Loved One?",
    album_id: 1,
    song_url: "song2"
  )
  Song.create!(
    title: "The Cave Of Hira",
    album_id: 1,
    song_url: "song3"
  )
  Song.create!(
    title: "Allahu",
    album_id: 1,
    song_url: "song4"
  )
  Song.create!(
    title: "The Creator",
    album_id: 1,
    song_url: "song5"
  )
  Song.create!(
    title: "Meditation",
    album_id: 1,
    song_url: "song6"
  )
  Song.create!(
    title: "Ya Mustafa",
    album_id: 1,
    song_url: "song7"
  )
  Song.create!(
    title: "Supplication",
    album_id: 1,
    song_url: "song8"
  )
  # Hobb W Mkattar
  Song.create!(
    title: "Hob W Mkattar",
    album_id: 2,
    song_url: "song1"
  )
  Song.create!(
    title: "Min Jdid",
    album_id: 2,
    song_url: "song2"
  )
  Song.create!(
    title: "Eiwiha",
    album_id: 2,
    song_url: "song3"
  )
  Song.create!(
    title: "La Tkhallini",
    album_id: 2,
    song_url: "song4"
  )
  Song.create!(
    title: "Kel Ma El Masa Bi Tol",
    album_id: 2,
    song_url: "song5"
  )
  Song.create!(
    title: "Dam3ato",
    album_id: 2,
    song_url: "song6"
  )
  Song.create!(
    title: "Kilme Elak",
    album_id: 2,
    song_url: "song7"
  )
  Song.create!(
    title: "Ya Kezabi",
    album_id: 2,
    song_url: "song8"
  )
  Song.create!(
    title: "Weilak",
    album_id: 2,
    song_url: "song9"
  )
  # Tabassam
  Song.create!(
    title: "Rouhi Fidak",
    album_id: 3,
    song_url: "song1"
  )
  Song.create!(
    title: "Tabassam",
    album_id: 3,
    song_url: "song2"
  )
  Song.create!(
    title: "Alhamdu Lillah",
    album_id: 3,
    song_url: "song3"
  )
  Song.create!(
    title: "Adnani",
    album_id: 3,
    song_url: "song4"
  )
  Song.create!(
    title: "Ghar Hira",
    album_id: 3,
    song_url: "song5"
  )
  Song.create!(
    title: "Eidun Saeed Feat. Maher Zain",
    album_id: 3,
    song_url: "song6"
  )
  Song.create!(
    title: "Assalatu Wassalamu",
    album_id: 3,
    song_url: "song7"
  )
  Song.create!(
    title: "Ya Man Bihali",
    album_id: 3,
    song_url: "song8"
  )
  Song.create!(
    title: "Farha",
    album_id: 3,
    song_url: "song9"
  )
  Song.create!(
    title: "Ataytu Bithanbi",
    album_id: 3,
    song_url: "song10"
  )
  Song.create!(
    title: "Du'a",
    album_id: 3,
    song_url: "song11"
  )
  puts "Done!"
# end

# test Sapiential
  Song.create!(
    title: "One",
    album_id: 6,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+POW.mp3"
  )
  Song.create!(
    title: "The Centre",
    album_id: 6,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mesut+Kurtis+Ya-Man-Bihali.mp3"
  )
  Song.create!(
    title: "Cadence",
    album_id: 6,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Yara+Ma-Baaref.mp3"
  )
  Song.create!(
  title: "no song 1",
  album_id: 6,
  song_url: "song4"
  )
  Song.create!(
  title: "no song 2",
  album_id: 6,
  song_url: "song5"
  )
  Song.create!(
  title: "no song 3",
  album_id: 6,
  song_url: "song6"
  )
  Song.create!(
  title: "no song 4",
  album_id: 6,
  song_url: "song7"
  )
  Song.create!(
  title: "no song 5",
  album_id: 6,
  song_url: "song8"
  )
  Song.create!(
  title: "no song 6",
  album_id: 6,
  song_url: "song9"
  )