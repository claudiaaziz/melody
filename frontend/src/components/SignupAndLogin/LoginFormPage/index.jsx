import { useState } from "react";
import { login } from "../../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { ReactComponent as ErrorIcon } from "../../../static/svgs/error.svg";
import { ReactComponent as ShowPassword } from "../../../static/svgs/sessionForms/showPassword.svg";
import { ReactComponent as HidePassword } from "../../../static/svgs/sessionForms/hidePassword.svg";
import "./LoginFormPage.css";
import MelodyLogo from "../../MelodyLogo";
import { loginGuest } from "../../../utils/loginGuest";
import { useSubmit } from "../../../hooks";

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const [errors, onSubmit, setErrors] = useSubmit({
    action: login({ credential, password })
  });

  if (currentUser) return <Redirect to="/" />;

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

        <form onSubmit={onSubmit}>
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
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
              {showPassword ? <ShowPassword className="show-password" onClick={() => setShowPassword(false)}/> : <HidePassword className="show-password" onClick={() => setShowPassword(true)}/> }
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