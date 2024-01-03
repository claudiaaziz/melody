import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as sessionActions from "../../../store/session";
import { ReactComponent as ProfileBtnIcon } from "../../../static/svgs/navbar/profileBtn.svg";
import "./ProfileBtn.css";

const ProfileBtn = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    if (!showMenu) return;
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <div className="profileBtnContainer">
      <button className="profileBtn" onClick={openMenu}>
        <ProfileBtnIcon/>
      </button>
      {showMenu && (
        <ul className="profileDropdown">
          <li>
            <button className="logoutBtn" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileBtn;