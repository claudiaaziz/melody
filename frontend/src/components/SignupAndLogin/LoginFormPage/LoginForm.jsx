import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import MelodyLogo from "../../../static/LogoAndSVGS/melodyLogo"

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (currentUser) return <Redirect to="/" />;

  const handleGuestUser = async () => {
    setCredential("")
    setPassword("")
    
    // typing effect
    const typingEffect = async (credential, setCredential) => {
      for (const char of credential) {
        // typing in the credential one char at a time
        await new Promise((resolve) => setTimeout(() => {
          setCredential((prev) => prev + char);
          resolve();
        }, 30)); 
      }
    };

    await typingEffect("guest@guest.com", setCredential);
    await typingEffect("guestpassword", setPassword);

    // login guest after typing effect is complete
      const guestCredentials = {
      credential: "guest@guest.com",
      password: "guestpassword",
    };
    await new Promise((resolve) => setTimeout(resolve, 300)); // short pause 
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
        <button className="guestLoginBtn" onClick={handleGuestUser}>
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