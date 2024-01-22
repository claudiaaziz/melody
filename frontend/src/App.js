import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupAndLogin/SignupFormPage";
import LoginFormPage from "./components/SignupAndLogin/LoginFormPage";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Playbar from "./components/Playbar";
import PlaylistShowPage from "./components/Playlists/PlaylistShow";
import SearchAlbums from "./components/SearchAlbums";
import AlbumIndex from "./components/Albums/AlbumIndex";
import AlbumShow from "./components/Albums/AlbumShow";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Navbar />
        <SideMenu />
        <Playbar />
        <AlbumIndex />
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/search" exact>
        <Navbar />
        <SideMenu />
        <Playbar />
        <SearchAlbums/>
      </Route>
      <Route path="/albums/:albumId">
        <Navbar />
        <SideMenu />
        <Playbar />
        <AlbumShow />
      </Route>
      <Route path="/playlists/:playlistId">
        <Navbar />
        <SideMenu />
        <Playbar />
        <PlaylistShowPage />
      </Route>
    </Switch>
  );
};

export default App;
