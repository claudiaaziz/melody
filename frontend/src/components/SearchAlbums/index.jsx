import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchAlbums.css";
import { getAlbums } from "../../store/albums";
import { ReactComponent as SearchIcon } from "../../static/svgs/search.svg";
import AlbumIndexItem from "../Albums/AlbumIndex/AlbumIndexItem";

const SearchAlbums = () => {
  const albums = useSelector(getAlbums);
  const [searchQuery, setSearchQuery] = useState("");

  // filtering albums based on query
  const filteredAlbums = useMemo(() => {
    return Object.values(albums).filter((album) =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
