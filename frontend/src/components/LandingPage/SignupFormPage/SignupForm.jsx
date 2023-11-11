import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { ReactComponent as SpotifyLogoIcon } from "../../svgs/logo.svg";

const SignupForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (currentUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);

      return (
        dispatch(sessionActions.signup({ email, username, password }))
          // handling any errors that occur during the signup process
          .catch(async (res) => {
            let data;
            try {
              // attempting to parse the response body as JSON
              // .clone() allows reading the response body twice (useful for logging or handling errors)
              data = await res.clone().json();
            } catch {
              // if parsing as JSON fails, get the response body as text
              data = await res.text();
            }

            // if the response data contains errors
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          })
      );
    }

    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <>
      <Link to="/">
        <SpotifyLogoIcon/>
      </Link>
      <div className="signupContainer">
        <h1>Sign up to start listening</h1>
        <form onSubmit={handleSubmit}>
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="signUpBtn">Sign up</button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;