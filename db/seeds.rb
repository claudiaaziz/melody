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
  maëlle = Artist.create!(name: "Maëlle")
  elvana_gjata = Artist.create!(name: "Elvana Gjata")
  sami_yusuf = Artist.create!(name: "Sami Yusuf")
  muhab = Artist.create!(name: "Muhab")
  massimo_pericolo = Artist.create!(name: "Massimo Pericolo")
  ece_seçkin = Artist.create!(name: "Ece Seçkin")

  puts "Creating albums..."
  fil_rouge = Album.create!(
    title: "Fil Rouge",
    artist_id: maëlle.id,
    release_year: 2023,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Fil+Rouge.png'
  )
  marre_x_e_di = Album.create!(
    title: "Marre x E di",
    artist_id: elvana_gjata.id,
    release_year: 2022,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Marre+x+E+di.png'
  )
  maëlle_album = Album.create!(
    title: "Maëlle",
    artist_id: maëlle.id,
    release_year: 2019,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle.png'
  )
  sapiential = Album.create!(
    title: "Sapiential",
    artist_id: sami_yusuf.id,
    release_year: 2020,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential.png'
  )
  without_you = Album.create!(
    title: "Without You",
    artist_id: sami_yusuf.id,
    release_year: 2009,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You.png'
  )
  bye = Album.create!(
    title: "Bye",
    artist_id: muhab.id,
    release_year: 2023,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Bye.png'
  )
  my_ummah = Album.create!(
    title: "My Ummah",
    artist_id: sami_yusuf.id,
    release_year: 2005,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah.png'
  )
  le_cose_cambiano = Album.create!(
    title: "Le cose cambiano",
    artist_id: massimo_pericolo.id,
    release_year: 2023,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano.png'
  )
  ya_kahera = Album.create!(
    title: "Ya Kahera",
    artist_id: muhab.id,
    release_year: 2023,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera.png'
  )
  masum = Album.create!(
    title: "Masum",
    artist_id: ece_seçkin.id,
    release_year: 2023,
    album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Masum.png'
  )

  puts "Creating songs..."
  # Fil Rouge
  Song.create!(
    title: "On avait promis d'être sage",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+On+avait+promis+d'e%CC%82tre+sage.mp3"
  )
  Song.create!(
    title: "Toujours",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Toujours.mp3"
  )
  Song.create!(
    title: "Toi",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle-+Toi.mp3"
  )
  Song.create!(
    title: "Flash",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Flash.mp3"
  )
  Song.create!(
    title: "Obsessionnel",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Obsessionnel.mp3"
  )
  Song.create!(
    title: "La flemme",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+La+Flemme.mp3"
  )
  Song.create!(
    title: "Slow",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Slow.mp3"
  )
  Song.create!(
    title: "Le bonheur",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Bonheur.mp3"
  )
  Song.create!(
    title: "Ouvrir les yeux",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Ouvrir+les+yeux.mp3"
  )
  Song.create!(
    title: "En attendant",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+En+attendant.mp3"
  )
  Song.create!(
    title: "Nuit Bleue",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Nuit+bleue.mp3"
  )
  Song.create!(
    title: "Lumière de l'aube",
    album_id: fil_rouge.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Lumie%CC%80re+de+l'aube.mp3"
  )
  # Marre x E di
  Song.create!(
    title: "POW",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+POW.mp3"
  )
  Song.create!(
    title: "Pak",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana_Gjata+-+Pak.mp3"
  )
  Song.create!(
    title: "SYNIN",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+SYNIN.mp3"
  )
  Song.create!(
    title: "Ska",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+Ska.mp3"
  )
  Song.create!(
    title: "Luj",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+LUJ.mp3"
  )
  Song.create!(
    title: "GAJDE",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+GAJDE.mp3"
  )
  Song.create!(
    title: "EX",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+EX.mp3"
  )
  Song.create!(
    title: "E di",
    album_id: marre_x_e_di.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+E+di.mp3"
  )
  # Maëlle
  Song.create!(
    title: "Toutes les machines ont un cœur",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Toutes_les_machines_ont_un_c%C5%93ur.mp3"
  )
  Song.create!(
    title: "Le mot d'absence",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Le_mot_dabsence.mp3"
  )
  Song.create!(
    title: "Le pianiste des gares",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Le_pianiste_des_gares.mp3"
  )
  Song.create!(
    title: "L'effet de masse",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Leffet_de_masse.mp3"
  )
  Song.create!(
    title: "Je t'aime comme je t'aime",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Je_taime_comme_je_taime.mp3"
  )
  Song.create!(
    title: "SOS",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+SOS.mp3"
  )
  Song.create!(
    title: "Sur un coup de tête",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Sur_un_coup_de_te%CC%82te.mp3"
  )
  Song.create!(
    title: "Si",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Si.mp3"
  )
  Song.create!(
    title: "Tu l'as fait",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+Tu_las_fait.mp3"
  )
  Song.create!(
    title: "La marque",
    album_id: maëlle_album.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Mae%CC%88lle+-+La_marque.mp3"
  )
  # Sapiential
  Song.create!(
    title: "Nasimi",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/The+Sapiential+Album+-+Nasimi.mp3"
  )
  Song.create!(
    title: "The Centre",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/The+Sapiential+Album+-+The+Centre.mp3"
  )
  Song.create!(
    title: "Cadence",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/The+Sapiential+Album+-+Cadence.mp3"
  )
  Song.create!(
    title: "Let Us Not Forget",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/The+Sapiential+Album++-+Let_Us_Not_Forget.mp3"
  )
  Song.create!(
    title: "Prism",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/The+Sapiential+Album++-+Prism.mp3"
  )
  Song.create!(
    title: "Khorasan",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/The+Sapiential+Album++-+Khorasan.mp3"
  )
  Song.create!(
    title: "Al-Mu'allim",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sami_Yusuf_Al-Mu'allim.mp3"
  )
  Song.create!(
    title: "Ya Mustafa",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sami_Yusuf_Meditation.mp3"
  )
  Song.create!(
    title: "Supplication",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sami_Yusuf_Supplication.mp3"
  )
  Song.create!(
    title: "Jaaneh Jaanaan",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential+-+Jaaneh_Jaanaan.mp3"
  )
  Song.create!(
    title: "The Journey",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential+-+The_Journey.mp3"
  )
  Song.create!(
    title: "The Praised One",
    album_id: sapiential.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential+-+The_Praised_One.mp3"
  )
  # Without You
  Song.create!(
    title: "Asma Allah",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+asma-allah.mp3"
  )
  Song.create!(
    title: "Without You",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+Without_You.mp3"
  )
  Song.create!(
    title: "Make Me Strong",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+_Make_Me_Strong.mp3"
  )
  Song.create!(
    title: "No Word Is Worthy",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+No_Word_Is_Worthy.mp3"
  )
  Song.create!(
    title: "Salaam",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+Salaam.mp3"
  )
  Song.create!(
    title: "You Came To Me",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+You_came_to_me_Arabic.mp3"
  )
  Song.create!(
    title: "Wherever You Are",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+Wherever_You_Are.mp3"
  )
  Song.create!(
    title: "The Dawn",
    album_id: without_you.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Without+You+-+The_Dawn.mp3"
  )
  # Bye
  Song.create!(
    title: "Gezira",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Gezira.mp3"
  )
  Song.create!(
    title: "Garima",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Garima.mp3"
  )
  Song.create!(
    title: "Ya Kahera",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Ya+Kahera.mp3"
  )
  Song.create!(
    title: "Ayam w khalas",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Ayam+w+khalas.mp3"
  )
  Song.create!(
    title: "Kitkat",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+kitkat.mp3"
  )
  Song.create!(
    title: "DEDE",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Dede.mp3"
  )
  Song.create!(
    title: "Amar",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Amar.mp3"
  )
  Song.create!(
    title: "Film",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Film.mp3"
  )
  Song.create!(
    title: "Rehla",
    album_id: bye.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bye+-+Rehla.mp3"
  )
  # My Ummah
  Song.create!(
    title: "My Ummah",
    album_id: my_ummah.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah+-+My_Ummah.mp3"
  )
  Song.create!(
    title: "Hasbi Rabbi",
    album_id: my_ummah.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah+-+Hasbi_Rabbi.mp3"
  )
  Song.create!(
    title: "Munajat",
    album_id: my_ummah.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah+-+Munajat.mp3"
  )
  Song.create!(
    title: "Mother",
    album_id: my_ummah.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah+-+Mother.mp3"
  )
  Song.create!(
    title: "Healing",
    album_id: my_ummah.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah+-+Healing.mp3"
  )
  Song.create!(
    title: "Ya Nabi",
    album_id: my_ummah.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/My+Ummah+-+Ya_Nabi.mp3"
  )
  Song.create!(
    title: "To Guide You Home",
    album_id: my_ummah.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/My_Ummah+-+To_Guide_You_Home.mp3"
  )
  # Le cose cambiano
  Song.create!(
    title: "Diluvio",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Diluvio.mp3"
  )
  Song.create!(
    title: "Moneylove",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Moneylove.mp3"
  )
  Song.create!(
    title: "Straniero",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Straniero.mp3"
  )
  Song.create!(
    title: "Totoro",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Totoro.mp3"
  )
  Song.create!(
    title: "Ciao Frate",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Ciao+Frate.mp3"
  )
  Song.create!(
    title: "Fils De Pute",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Fils_De_Pute.mp3"
  )
  Song.create!(
    title: "Senza Di Me",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Senza_Di_Me.mp3"
  )
  Song.create!(
    title: "Come Aria",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Come_Aria.mp3"
  )
  Song.create!(
    title: "Le Cose Cambiano (Lcc)",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Le_Cose_Cambiano.mp3"
  )
  Song.create!(
    title: "Di Persona",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Di_Persona.mp3"
  )
  Song.create!(
    title: "Povero Stronzo",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Povero_Stronzo.mp3"
  )
  Song.create!(
    title: "Insieme",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Insieme.mp3"
  )
  Song.create!(
    title: "Ancora Qua",
    album_id: le_cose_cambiano.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Le+cose+cambiano+-+Ancora_Qua.mp3"
  )
  # Ya Kahera
  Song.create!(
    title: "MSR",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+MSR.mp3"
  )
  Song.create!(
    title: "ERSH",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+ERSH.mp3"
  )
  Song.create!(
    title: "HFK",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+HFK.mp3"
  )
  Song.create!(
    title: "3ALAM",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+3ALAM.mp3"
  )
  Song.create!(
    title: "Sawwah",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+Sawwah.mp3"
  )
  Song.create!(
    title: "YAZMEELY",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+YAZMEELY.mp3"
  )
  Song.create!(
    title: "YA DONYA ANA BAREE2",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+YA+DONYA+ANA+BAREE2.mp3"
  )
  Song.create!(
    title: "RAP",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+RAP.mp3"
  )
  Song.create!(
    title: "SOURA",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+SOURA.mp3"
  )
  Song.create!(
    title: "REZ2Y",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+REZ2Y.mp3"
  )
  Song.create!(
    title: "M3 EL SALAMA",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+M3+EL+SALAMA.mp3"
  )
  Song.create!(
    title: "YA MOSLMEN",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+YA+MOSLMEN.mp3"
  )
  Song.create!(
    title: "HEKAYA",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+HEKAYA.mp3"
  )
  Song.create!(
    title: "BYE",
    album_id: ya_kahera.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Ya+Kahera+-+BYE.mp3"
  )
  # Masum
  Song.create!(
    title: "Aman Aman",
    album_id: masum.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Masum+-+Aman_Aman.mp3"
  )
  Song.create!(
    title: "Hoşuna Mı Gidiyor?",
    album_id: masum.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Masum+-+Hosuna+Mi+Gidiyor%3F.mp3"
  )
  Song.create!(
    title: "Masum",
    album_id: masum.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Masum+-+Masum.mp3"
  )
  Song.create!(
    title: "Adeyyo",
    album_id: masum.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Masum+-+Adeyyo.mp3"
  )
  Song.create!(
    title: "Karma",
    album_id: masum.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Masum+-+Karma.mp3"
  )
  Song.create!(
    title: "Olsun",
    album_id: masum.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Masum+-+Olsun.mp3"
  )
  Song.create!(
    title: "Şok Oldum",
    album_id: masum.id,
    song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Masum+-+S%CC%A7ok_Oldum.mp3"
  )

  puts "Done!"
