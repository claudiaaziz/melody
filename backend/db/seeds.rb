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

  puts "Creating albums..."
  Album.create!(
    title: "Al-Mu'allim",
    artist_id: 1,
    release_year: 2005,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Sami_Yusuf.png'
  )

  puts "Done!"
end