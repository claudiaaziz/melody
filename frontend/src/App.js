import React from "react";
import { Route, Switch } from "react-router-dom";
import AlbumIndex from "./components/AlbumIndex";
import SignupFormPage from "./components/SignupAndLogin/SignupFormPage";
import LoginFormPage from "./components/SignupAndLogin/LoginFormPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Navigation />
          <AlbumIndex />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
