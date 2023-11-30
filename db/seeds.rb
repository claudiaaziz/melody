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
  Playlist.destroy_all
  Song.destroy_all
  Album.destroy_all
  Artist.destroy_all
  User.destroy_all

  ApplicationRecord.connection.reset_pk_sequence!('artists')
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('albums')
  ApplicationRecord.connection.reset_pk_sequence!('playlists')
  ApplicationRecord.connection.reset_pk_sequence!('songs')

  puts "Creating guest user..."
  guest = User.create!(
    username: 'guest',
    email: 'guest@guest.com',
    password: 'guestpassword'
  )

  puts "Creating artists..."
  artists = [
    { name: "Sami Yusuf" },
    { name: "Joseph Attieh" },
    { name: "Mesut Kurtis" },
    { name: "Yara" },
    { name: "Najwa Karam" },
    { name: "Haife Wehbe" }
  ]

  all_artists = []
  artists.each { |artist| all_artists << Artist.create!(artist) }

  puts "Creating albums..."
  albums= [
    { title: "Al-Mu'allim", artist_id: artists[0].id, release_year: 2005, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Sami_Yusuf.png' },
    { title: "Hobb W Mkattar", artist_id: artists[1].id, release_year: 2015, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Joseph_Attieh.png' },
    { title: "Tabassam", artist_id: artists[2].id, release_year: 2015, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Mesut+Kurtis.png' },
    { title: "Ya Ayech Bi Oyouni", artist_id: artists[3].id, release_year: 2016, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Yara.png' },
    { title: "هلليله مافي نوم", artist_id: artists[4].id, release_year: 2011, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Najwa+Karam.png' },
    { title: "Sapiential", artist_id: artists[0].id, release_year: 2020, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential.png' },
    { title: "Hawwa", artist_id: artists[5].id, release_year: 2018, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Hawwa.png' },
    { title: "My Ummah", artist_id: artists[0].id, release_year: 2005, cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah.png' }
  ]

  all_albums = []
  albums.each { |album| all_albums << Album.create!(album) }


  puts "Creating songs..."
  # Al-Mu'allim
  Song.create!(
    title: "Al-Mu'allim",
    album_id: 1,
    song_url: "song1"
  )
  Song.create!(
    title: "Who Is The Loved One?",
    album_id: al_muallim.id,
    song_url: "song2"
  )
  Song.create!(
    title: "The Cave Of Hira",
    album_id: al_muallim.id,
    song_url: "song3"
  )
  Song.create!(
    title: "Allahu",
    album_id: al_muallim.id,
    song_url: "song4"
  )
  Song.create!(
    title: "The Creator",
    album_id: al_muallim.id,
    song_url: "song5"
  )
  Song.create!(
    title: "Meditation",
    album_id: al_muallim.id,
    song_url: "song6"
  )
  Song.create!(
    title: "Ya Mustafa",
    album_id: al_muallim.id,
    song_url: "song7"
  )
  Song.create!(
    title: "Supplication",
    album_id: al_muallim.id,
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

  puts "Done!"
