export const fetchSongDuration = async (url, setDuration) => {
  const audio = new Audio(url);
  audio.addEventListener("loadedmetadata", () => {
    setDuration(audio.duration);
  });
};

export const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
