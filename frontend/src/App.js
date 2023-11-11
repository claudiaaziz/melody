import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupFormPage from "./components/LandingPage/SignupFormPage";
import LoginFormPage from "./components/LandingPage/LoginFormPage";
import Navigation from "./components/LandingPage/Navigation";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Navigation />
          <LandingPage />
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
