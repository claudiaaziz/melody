import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupAndLogin/SignupFormPage";
import LoginFormPage from "./components/SignupAndLogin/LoginFormPage";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import AlbumIndexPage from "./components/AlbumIndexPage";
import AlbumShowPage from "./components/AlbumShowPage";
import Playbar from "./components/Playbar";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <SideMenu />
          <Playbar />
          <AlbumIndexPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route path="/albums/:albumId">
          <Navbar />
          <SideMenu />
          <Playbar />
          <AlbumShowPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
