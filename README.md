# Canvas

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
  - Add/ remove songs from personal playlists
- Search for songs & albums

## Implementation Details


### The playbarReducer ensures smooth transitions and accurate representation of the player's state, contributing to a cohesive music playback experience.

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

### Managing audio playback, updating song source, and ensuring responsive volume control 

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
