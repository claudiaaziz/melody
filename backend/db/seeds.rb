# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  User.destroy_all
  Artist.destroy_all
  Album.destroy_all

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

  puts "Done!"
end