import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { ReactComponent as ErrorIcon } from "../../../static/svgs/error.svg";
import "./SignupFormPage.css";
import MelodyLogo from "../../MelodyLogo";
import { useSubmit } from "../../../hooks";
import { login, signup } from "../../../store/session";
import { guestCredentials, typingEffect } from "../../../utils/loginGuest";

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, onSubmit, setErrors] = useSubmit({ 
    action: signup({ email, username, password }),
    validate: () => {
      if (password !== confirmPassword) {
        return ['Confirm Password field must be the same as the Password field'];
      }
    }
  });

  const loginGuest = async () => {
    setErrors([]);
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");

    await typingEffect("guest@guest.com", setEmail);
    await typingEffect("guest", setUsername);
    await typingEffect("guestpassword", setPassword);
    await typingEffect("guestpassword", setConfirmPassword);

    await new Promise((resolve) => setTimeout(resolve, 300)); // short pause
    dispatch(login(guestCredentials));
  };

  if (currentUser) return <Redirect to="/" />;

  return (
    <div className="signupForm">
      <div className="signupHeader">
        <MelodyLogo />
        <button className="guestUserBtn" onClick={loginGuest}>
          Guest
        </button>
      </div>

      <div className="signupContainer">
        <h1>Sign up to start listening</h1>

        <hr/>

        <form onSubmit={onSubmit}>
          <label>
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.map((error) => {
              if (error.includes("Email")) {
                return  <div key={error} className="error-div">
                          <div><ErrorIcon/></div>
                          <div>{error}</div>
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
                    <div>{error}</div>
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
                    <div>{error}</div>
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
              if (error.includes("Password")) {
                return <div key={error} className="error-div">
                    <div><ErrorIcon/></div>
                    <div>{error}</div>
                  </div>
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
    </div>
  );
};

export default SignupFormPage;