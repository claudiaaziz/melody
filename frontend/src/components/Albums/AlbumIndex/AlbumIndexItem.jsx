const AlbumIndexItem = ({ album }) => {
    return (
        <div className='albumIndexItem'>
            <img src={album.albumCoverUrl} alt={`${album.title} cover`} />
            <h2>{album.title}</h2>
            <p className='artistName'>{album.artistName}</p>
        </div>
    );
};

export default AlbumIndexItem;
