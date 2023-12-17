import React, { useState, useEffect } from "react";
import "./SearchSongs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, getSongs } from "../../../../store/songs";
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
    <div className="search-songs-div">
      <div>Let's find something for your playlist</div>
      <div className="search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for songs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {searchQuery && (
        <div>
          {filteredSongs.length === 0 ? (
            <div className="no-songs-results-div">
              <h2>No results found for "{searchQuery}"</h2>
              <p>
                Please make sure your words are spelled correctly, or use fewer
                or different keywords.
              </p>
            </div>
          ) : (
            filteredSongs.map((song) => (
              <PlaylistSongListItem key={song.id} song={song} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSongs;