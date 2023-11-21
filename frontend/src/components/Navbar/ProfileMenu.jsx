import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./ProfileMenu.css";
import { ReactComponent as ProfileBtnIcon } from "../../static/LogoAndSVGS/navbar/profileBtn.svg";
import { pauseSong } from "../../store/playbar";


const ProfileMenu = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    dispatch(pauseSong())
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

export default ProfileMenu;