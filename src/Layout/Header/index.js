import React from "react"
import Appbar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import headStyle from "./style/header.module.css"
import { FaUserAlt } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"


const Header = () => {
  return (
    <header>
      <div className={headStyle.header}>
        <div className={headStyle.sky}>
          <img src="/img/logo-transparent.svg" />
        </div>
        <div className={headStyle.sports}>
          <ul>
            <li>Get Sky Sports</li>
            <li>
              <FaUserAlt /> Log In
            </li>
          </ul>
          <input
            className={headStyle.searchBox}
            placeholder="Search Sky Sports"
            type="text"
          />
          <span>
            <AiOutlineSearch className={headStyle.icon} />
          </span>
        </div>
      </div>
      <div className={headStyle.bottom_nav}>
        <ul>
          <li>Home</li>
          <li>Sports</li>
          <li>Scores</li>
          <li>Video</li>
          <li>TV</li>
          <li>Sky Bet</li>
          <li>Games</li>
          <li>More</li>
        </ul>
        <button className={headStyle.btn}>Watch Sky Sports</button>
      </div>
    </header>
  );
};

export default Header;
