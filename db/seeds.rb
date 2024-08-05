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
    PlaylistSong.destroy_all
    Playlist.destroy_all
    Song.destroy_all
    Album.destroy_all
    Artist.destroy_all
    User.destroy_all

    ApplicationRecord.connection.reset_pk_sequence!('playlist_songs')
    ApplicationRecord.connection.reset_pk_sequence!('playlists')
    ApplicationRecord.connection.reset_pk_sequence!('songs')
    ApplicationRecord.connection.reset_pk_sequence!('albums')
    ApplicationRecord.connection.reset_pk_sequence!('artists')
    ApplicationRecord.connection.reset_pk_sequence!('users')

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
    butrint_imeri = Artist.create!(name: "Butrint Imeri")
    dafina_zeqiri = Artist.create!(name: "Dafina Zeqiri")

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
        release_year: 2024,
        album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential.png'
    )
    psikopat = Album.create!(
        title: "Psikopat",
        artist_id: butrint_imeri.id,
        release_year: 2024,
        album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/butrint.jpeg'
    )
    a_te_ka_mungu = Album.create!(
        title: "A Te Ka Mungu",
        artist_id: dafina_zeqiri.id,
        release_year: 2024,
        album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/dafina.jpeg'
    )
    bye = Album.create!(
        title: "Bye",
        artist_id: muhab.id,
        release_year: 2023,
        album_cover_url: 'https://melody-seeds.s3.us-east-2.amazonaws.com/Bye.png'
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
    Song.create!(
        title: "NO LOVE",
        album_id: marre_x_e_di.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Elvana+Gjata+-+NO+LOVE.mp3"
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
        title: "River of Paradise",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/sami+-+River.of.Paradise.mp3"
    )
    Song.create!(
        title: "Breeze",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/sami+-+Breeze.mp3"
    )
    Song.create!( 
        title: "Nasimi",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential+-+Nasimi.mp3"
    )
    Song.create!(
        title: "The Journey",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/sami+-+The+Journey.mp3"
    )
    Song.create!(
        title: "Jaaneh Jaanaan",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Sapiential+-+Jaaneh_Jaanaan.mp3"
    )
    Song.create!(
        title: "كداب",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/%D9%83%D8%AF%D8%A7%D8%A8+Cravata.mp3"
    )
    Song.create!(
        title: "Shabe Royaei",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Shabe+Royaei.mp3"
    )
    Song.create!(
        title: "Motadetam",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Motadetam.mp3"
    )
    Song.create!(
        title: "Atre Bahar",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Atre+Bahar.mp3"
    )
    Song.create!(
        title: "Bi Bahooneh",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bi+Bahooneh.mp3"
    )
    Song.create!(
        title: "Dor Doneh Yar",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Dor+Doneh+Yar.mp3"
    )
    Song.create!(
        title: "Aman Güzel Yavaş Yürü",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Aman+Gu%CC%88zel+Yavas%CC%A7+Yu%CC%88ru%CC%88.mp3"
    )
    Song.create!(
        title: "DOĞUŞTAN BERİ HAKLIYIM (tmm)",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/DOG%CC%86US%CC%A7TAN+BERI%CC%87+HAKLIYIM+(tmm).mp3"
    )
    Song.create!(
        title: "Bertaraf",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Bertaraf.mp3"
    )
    Song.create!(
        title: "Wayah",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Wayah.mp3"
    )
    Song.create!(
        title: "اليوم الحلو ده",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/%D8%A7%D9%84%D9%8A%D9%88%D9%85+%D8%A7%D9%84%D8%AD%D9%84%D9%88+%D8%AF%D9%87.mp3"
    )
    Song.create!(
        title: "اول ما سحبت حزامي",
        album_id: sapiential.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/%D8%A7%D9%88%D9%84+%D9%85%D8%A7+%D8%B3%D8%AD%D8%A8%D8%AA+%D8%AD%D8%B2%D8%A7%D9%85%D9%8A.mp3"
    )
    # Psikopat
    Song.create!(
        title: "Corazon",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Corazon.mp3"
    )
    Song.create!(
        title: "AM",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+AM.mp3"
    )
    Song.create!(
        title: "PM",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+PM.mp3"
    )
    Song.create!(
        title: "Dale",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Dale.mp3"
    )
    Song.create!(
        title: "Diskoteka",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Diskoteka.mp3"
    )
    Song.create!(
        title: "Dujem",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Dujem.mp3"
    )
    Song.create!(
        title: "Kuku",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Kuku.mp3"
    )
    Song.create!(
        title: "Lejla",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Lejla.mp3"
    )
    Song.create!(
        title: "Moj Dashni",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Moj+Dashni.mp3"
    )
    Song.create!(
        title: "PARE",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+PARE.mp3"
    )
    Song.create!(
        title: "Psikopat",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Psikopat.mp3"
    )
    Song.create!(
        title: "Tu Menu",
        album_id: psikopat.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Psikopat+-+Tu+Menu.mp3"
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
    # A Te Ka Mungu
    Song.create!(
        title: "Dumlla Dumlla",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Dafina+-+Dumlla+Dumlla.mp3"
    )
    Song.create!(
        title: "Ku Je Ti",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Dafina+-+Ku+Je+Ti.mp3"
    )
    Song.create!(
        title: "A Te Ka Mungu",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Dafina+-+A+Te+Ka+Mungu.mp3"
    )
    Song.create!(
        title: "Dasma",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Dafina+-+DASMA.mp3"
    )
    Song.create!(
        title: "Luj",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Dafina+-+LUJ.mp3"
    )
    Song.create!(
        title: "Si Ai",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Si+Ai.mp3"
    )
    Song.create!(
        title: "Malli",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/-+MALLI+2024.mp3"
    )
    Song.create!(
        title: "Paro",
        album_id: a_te_ka_mungu.id,
        song_url: "https://melody-seeds.s3.us-east-2.amazonaws.com/Paro.mp3"
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

    puts "Creating playlists..."
    Playlist.create!(
        name: "My Playlist #1",
        user_id: 1,
    )
    Playlist.create!(
        name: "🦋🎧",
        user_id: 1,
    )
    Playlist.create!(
        name: "My Playlist #3",
        user_id: 1,
    )
    Playlist.create!(
        name: "🤍🩰",
        user_id: 1,
    )
    Playlist.create!(
        name: "My Playlist #5",
        user_id: 1,
    )

    puts "Creating playlist songs..."
    # playlist 1
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 1,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 4,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 6,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 10,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 12,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 14,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 16,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 18,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 21,
    )
    PlaylistSong.create!(
        playlist_id: 1,
        song_id: 9,
    )
    # playlist 2
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 2,
    )
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 13,
    )
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 15,
    )
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 23,
    )
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 27,
    )
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 76,
    )
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 72,
    )
    PlaylistSong.create!(
        playlist_id: 2,
        song_id: 58,
    )
    # playlist 4
    PlaylistSong.create!(
        playlist_id: 4,
        song_id: 98,
    )
    PlaylistSong.create!(
        playlist_id: 4,
        song_id: 99,
    )
    PlaylistSong.create!(
        playlist_id: 4,
        song_id: 94,
    )
    PlaylistSong.create!(
        playlist_id: 4,
        song_id: 37,
    )
    PlaylistSong.create!(
        playlist_id: 4,
        song_id: 107,
    )
    PlaylistSong.create!(
        playlist_id: 4,
        song_id: 13,
    )
    PlaylistSong.create!(
        playlist_id: 4,
        song_id: 14,
    )
    # playlist 5
    PlaylistSong.create!(
        playlist_id: 5,
        song_id: 51,
    )
    PlaylistSong.create!(
        playlist_id: 5,
        song_id: 73,
    )
    PlaylistSong.create!(
        playlist_id: 5,
        song_id: 77,
    )
    PlaylistSong.create!(
        playlist_id: 5,
        song_id: 85,
    )
    PlaylistSong.create!(
        playlist_id: 5,
        song_id: 89,
    )

    puts "Done!"