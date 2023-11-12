import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import MelodyLogo from "../../LogoAndSVGS/melodyLogo"

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (currentUser) return <Redirect to="/" />;

  const handleGuestUser = () => {
    const guestCredentials = {
      credential: "guest@guest.com",
      password: "guestpassword",
    };

    dispatch(sessionActions.login(guestCredentials));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        let data;

        // attempting to clone and parse the response as JSON
        try {
          data = await res.clone().json();
        } catch {
          // if parsing fails, try to get the response as plain text
          data = await res.text();
        }

        // handling errors in the response data
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
      <div className="loginHeader">
        <MelodyLogo />
        <button type="submit" className="guestLoginBtn" onClick={handleGuestUser}>
          Login As Guest
        </button>
      </div>

      <div className="loginContainer">
        <h1>Log in to Spotify</h1>
        <hr />

        <ul className="loginErrors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="loginBtn">
            Log In
          </button>
        </form>
        
        <hr />
        <p className="signupLink">
          Don't have an account?
          <Link to="/signup">Sign up for Spotify.</Link>
        </p>
      </div>
    </>
  );
};

export default LoginFormPage;