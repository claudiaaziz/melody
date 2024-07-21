export const fetchSongDuration = async (url, setDuration) => {
    const audio = new Audio(url);
    audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
    });
};
