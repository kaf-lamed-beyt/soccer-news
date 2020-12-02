import React from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import headStyle from "./style/header.module.css";

const Header = () => {
  return (
    <header>
        <div className={headStyle.header}>
            <div className={headStyle.sky} />
            <div className={headStyle.sports} />
        </div>
    </header>
  )
}

export default Header;