# Melody

[Melody](https://melody-y6yi.onrender.com/), a Spotify clone, is a music streaming platform that lets users listen to a vast library of songs. Users can explore albums, listen to it's songs and create playlists.

![Melody Interface](./frontend/src/static/images/readme/melody-interface.png)

## Technologies, Libraries, APIs
### Melody leverages the following technologies:
- React
- Redux
- Ruby on Rails
- Jbuilder
- PostgreSQL
- Webpack 
- npm to manage project dependencies.
- AWS

## Functionality & MVPs
### In Melody, users are able to:
- Sign up, sign in, log out or login as a guest
- Click on an album to explore and play its songs
- Play, pause, rewind to previous song, skip to next song in album/ playlist, adjust the volume of the song via a slider and jump to different parts of the song via a slider
- Create, update & delete personal playlists

## Implementation Details

### Managing Play State 

The playbarReducer ensures smooth transitions of the playbars's state, contributing to a seamless music playback experience.

```javascript
const playbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_QUEUE:
      return {
        ...state,
        isPlaying: true,
        currentSongId: action.data.songId,
        currentAlbumId: action.data.albumId,
      };
    case PAUSE_SONG:
      return { ...state, isPlaying: false };
    case PLAY_SONG:
      return { ...state, isPlaying: true };
    default:
      return state;
  }
};
```

### Managing Audio Playback and State Updates

These useEffect hooks collectively contribute to the dynamic and responsive management of audio playback.

```javascript
// Play/ pause audio
useEffect(() => {
  if (isAudioReady && isPlaying && currentUser) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
}, [isPlaying, isAudioReady, currentUser]);

// Update src if currentSongUrl changes
useEffect(() => {
  if (currentSongUrl) {
    setIsAudioReady(false);
    audioRef.current.src = currentSongUrl;
  }
}, [currentSongUrl]);

// Update volume if volume state changes
useEffect(() => {
  if (volume) {
    audioRef.current.volume = volume;
  }
}, [isPlaying, isAudioReady, volume]);
```

### Previous and Next Song Navigation/ Song Queue Handling:

Taking into account the current song index and the total number of songs in the album/ playlist efficiently handles previous and next song actions. Ensuring a smooth transition between songs.

```javascript
const handlePrevious = () => {
  const newIdx = (currentSongIdx - 1 + albumSongs.length) % albumSongs.length;
  dispatch(playQueue(albumSongs[newIdx], currentAlbumId));
};

const handleNext = () => {
  const newIdx = (currentSongIdx + 1) % albumSongs.length;
  dispatch(playQueue(albumSongs[newIdx], currentAlbumId));
};
```