import { useState } from "react";
import * as sessionActions from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { ReactComponent as ErrorIcon } from "../../../static/svgs/error.svg";
import { ReactComponent as ShowPassword } from "../../../static/svgs/sessionForms/showPassword.svg";
import { ReactComponent as HidePassword } from "../../../static/svgs/sessionForms/hidePassword.svg";
import "./LoginFormPage.css";
import MelodyLogo from "../../MelodyLogo";
import { loginGuest } from "../../../utils/loginGuest";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false)

  if (currentUser) return <Redirect to="/" />;

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
    <div className="loginForm">
      <div className="loginHeader">
        <MelodyLogo />
        <button className="guestLoginBtn" onClick={() => loginGuest(setErrors, setCredential, setPassword, dispatch)}>
          Login As Guest
        </button>
      </div>

      <div className="loginContainer">
        <h1>Log in to Melody</h1>

        <hr />
      {errors.length > 0 && (
        <div className="loginError">
          <ErrorIcon/>
          {errors}
        </div>
      )}

        <form onSubmit={handleSubmit}>
          <label>
            Email or username
            <input
              autoFocus
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
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            <div className="password-div">
              {showPassword ? <ShowPassword onClick={() => setShowPassword(false)}/> : <HidePassword onClick={() => setShowPassword(true)}/> }
          </div>
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
    </div>
  );
};

export default LoginFormPage;