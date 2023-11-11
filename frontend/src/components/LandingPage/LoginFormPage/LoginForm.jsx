import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { ReactComponent as SpotifyLogoIcon } from "../../svgs/logo.svg";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (currentUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        let data;

        // attempting to clone res & parse it as JSON
        try {
          data = await res.clone().json();
        } catch {
          // if this fails try to get res as plain text
          data = await res.text();
        }

        // if the res data contains errors
        if (data?.errors) {
          setErrors(data.errors);
        } else if (data) {
          setErrors([data]);
        } else {
          setErrors([res.statusText]);
        }
      }
    );
  };

  return (
    <>
      <Link to="/">
        <SpotifyLogoIcon/>
      </Link>
      <div className="loginContainer">
        <h1>Log in to Spotify</h1>
        <form onSubmit={handleSubmit}>
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <label>
            Email or username
            <input
              type="text"
              value={credential}
              placeholder="Email or username"
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="loginBtn">Log In</button>
        </form>
      </div>
    </>
  );
};

export default LoginFormPage;