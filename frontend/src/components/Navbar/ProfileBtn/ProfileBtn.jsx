import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as sessionActions from "../../../store/session";
import { ReactComponent as ProfileBtnIcon } from "../../../static/svgs/navbar/profileBtn.svg";
import "./ProfileBtn.css";

const ProfileBtn = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const openProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);

  // close menu if user clicks off 
  useEffect(() => {
    if (!isProfileMenuOpen) return;
    document.addEventListener("click", closeProfileMenu);
    return () => document.removeEventListener("click", closeProfileMenu);
  }, [isProfileMenuOpen]);


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <div className="profileBtnContainer">
      <button className="profileBtn" onClick={openProfileMenu}>
        <ProfileBtnIcon/>
      </button>
      {isProfileMenuOpen && (
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