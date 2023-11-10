import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LandingPage/LoginFormPage";
import SignupFormPage from "./components/LandingPage/SignupFormPage";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";

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
