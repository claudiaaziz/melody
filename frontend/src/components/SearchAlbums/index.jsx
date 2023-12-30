import React, { useState, useEffect } from "react";
import "./SearchAlbums.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums, getAlbums } from "../../store/albums";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as SearchIcon } from "../../static/LogoAndSVGS/search.svg";
import AlbumIndexItem from "../Albums/AlbumIndex/AlbumIndexItem";

const SearchAlbums = () => {
  const dispatch = useDispatch();
  const albums = useSelector(getAlbums);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  // filtering albums based on query
  useEffect(() => {
    const filtered = Object.values(albums).filter((album) =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredAlbums(filtered);
  }, [searchQuery, albums]);

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
        {filteredAlbums.length === 0 ? (
          <div className="no-results-div">
            <h2>No results found for "{searchQuery}"</h2>
            <p>
              Please make sure your words are spelled correctly, or use fewer or
              different keywords.
            </p>
          </div>
        ) : (
          filteredAlbums.map((album) => (
            <Link
              to={`/albums/${album.id}`}
              key={album.id}
              className="albumLink"
            >
              <AlbumIndexItem album={album} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchAlbums;
