import React, { useState, useEffect } from "react";
import "./SearchSongs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, getSongs } from "../../../../store/songs";
// import AlbumIndexItem from "../Albums/AlbumIndexPage/AlbumIndexItem";
import { ReactComponent as SearchIcon } from "../../../../static/LogoAndSVGS/sideMenu/search.svg";
import PlaylistSongListItem from "../../PlaylistSongListItem";

const SearchSongs = () => {
  const dispatch = useDispatch();
  const songs = useSelector(getSongs);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  // filtering songs based on query
  useEffect(() => {
    const filtered = Object.values(songs).filter((song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSongs(filtered);
  }, [searchQuery, songs]);

  return (
    <div className="albumIndexPage">
      <div className="album-index-items">
        <div className="search-album">
          <SearchIcon />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredSongs.length === 0 ? (
          <div className="no-results-div">
            <h2>No results found for "{searchQuery}"</h2>
            <p>
              Please make sure your words are spelled correctly, or use fewer or
              different keywords.
            </p>
          </div>
        ) : (
          filteredSongs.map((song) => (
              // <AlbumIndexItem album={album} />
            <PlaylistSongListItem song={song}/>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchSongs;
