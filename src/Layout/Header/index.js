import React from "react"
import headStyle from "./style/header.module.css"
import { FaUserAlt } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import Burger from "../../../components/Burger"
import Colors from "../../../components/NavColor"

const Header = () => {
  return (
    <header>
      <div className={headStyle.header}>
        <div className={headStyle.sky}>
          <img src="/img/logo-transparent.svg" id={headStyle.force} />
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
        <Burger />
        <Colors />
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
