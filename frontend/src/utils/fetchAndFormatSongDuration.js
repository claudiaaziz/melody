export const fetchSongDuration = async (url, setDuration) => {
  const audio = new Audio(url);
  audio.addEventListener("loadedmetadata", () => {
    setDuration(audio.duration);
  });
};

export const formatSongDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
