import React from 'react';
import MelodyLogo from '../LogoAndSVGS/melodyLogo';
import "./SideMenu.css"

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <MelodyLogo />
      <ul className="menuList">
        <li>Home</li>
        <li>Search</li>
        <li>Your Library</li>
      </ul>
    </div>
  );
};

export default SideMenu;
