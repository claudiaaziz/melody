import React from "react";

const AlbumIndexItem = ({album}) => {
  return (
    <div className="albumIndexItem">
      <img src={album.albumCoverUrl} alt="" />
      <h2 className="artistTitle">{album.title}</h2>
      <p className="artistName">{album.artistName}</p>
    </div>
  );
};

export default AlbumIndexItem;
