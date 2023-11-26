import React from "react";

const AlbumShowPageHeader = ({ album }) => {
  return (
    <div className="albumShowPageHeader">
      <img src={album.albumCoverUrl} alt="" />
      <div className="albumDetails">
        <p>Album</p>
        <h2>{album.title}</h2>
        <div>
          <span>{album.artistName}</span>
          <span>‧</span>
          <span>{album.releaseYear}</span>
          <span>‧</span>
          <span>
            {album.albumSongs ? album.albumSongs.length : 0} songs
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlbumShowPageHeader;