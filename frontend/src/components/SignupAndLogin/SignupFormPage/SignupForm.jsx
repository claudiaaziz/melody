import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import MelodyLogo from "../../../static/LogoAndSVGS/melodyLogo"
import { ReactComponent as ErrorIcon } from "../../../static/LogoAndSVGS/sessions/error.svg";

const SignupForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (currentUser) return <Redirect to="/" />;

  const handleGuestUser = async () => {
    setEmail("")
    setUsername("")
    setPassword("")
    setConfirmPassword("")
    // typing effect
    const typingEffect = async (credential, setCredential) => {
      for (const char of credential) {
         // short delay to simulate typing speed
        await new Promise((resolve) => setTimeout(() => {
          setCredential((prev) => prev + char);
          resolve();
        }, 30));
      }
    };

    await typingEffect("guest@guest.com", setEmail);
    await typingEffect("guest", setUsername);
    await typingEffect("guestpassword", setPassword);
    await typingEffect("guestpassword", setConfirmPassword);

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

    if (password === confirmPassword) {
      setErrors([]);

      return (
        dispatch(sessionActions.signup({ email, username, password }))
          // handling any errors that occur during the signup process
          .catch(async (res) => {
            let data;
            try {
              // attempting to parse the response body as JSON
              data = await res.clone().json();
            } catch {
              // if parsing as JSON fails, get the response body as text
              data = await res.text();
            }

            // handling errors in the response data
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          })
      );
    }

    return setErrors([
      "Confirm Password field must be the same as the Password field.",
    ]);
  };

  return (
    <>
      <div className="signupHeader">
        <MelodyLogo />
        <button className="guestUserBtn" onClick={handleGuestUser}>
          Guest
        </button>
      </div>

      <div className="signupContainer">
        <h1>Sign up to start listening</h1>

        <hr/>

        <form onSubmit={handleSubmit}>
          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.map((error) => {
              if (error.includes("Email is invalid")) {
                return  <div key={error} className="error-div">
                          <div>
                          <ErrorIcon/>
                          </div>
                          <div>
                          This email is invalid. Make sure it's written like example@email.com.
                          </div>
                        </div>
              }
              return null;
            })}
          </label>
          
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.map((error) => {
              if (error.includes("Username")) {
                return <div key={error} className="error-div">
                    <div><ErrorIcon/></div>
                    <div>Username should contain at least 3 characters.</div>
                  </div>;
              }
              return null;
            })}
          </label>
          
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.map((error) => {
              if (error.includes("Password")) {
                return <div key={error} className="error-div">
                    <div><ErrorIcon/></div>
                    <div>Password should contain at least 6 characters.</div>
                </div>;
              }
              return null;
            })}
          </label>
          
          <label>
            Confirm password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.map((error) => {
              if (error.includes("Confirm Password")) {
                return <div key={error} className="error-div">
                    <div><ErrorIcon/></div>
                    <div>{error}</div>
                  </div>;
              }
              return null;
            })}
          </label>
          
          <button type="submit" className="signUpBtn">Sign up</button>
        </form>

        <hr/>

        <p className="loginLink">
          Already have an account? <Link to="/login">Log in here.</Link>
        </p>
      </div>
    </>
  );
};

export default SignupForm;