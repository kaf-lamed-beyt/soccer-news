import React from "react"
import burg from "./style/burger.module.css"
import { IoMdMenu } from "react-icons/io"
import { FaUserAlt } from "react-icons/fa"
import { RiArrowDownSLine } from "react-icons/ri"

const Burger = () => {
  const [active, setActive] = React.useState(false)

  const toggleMobileMenu = () => {
    setActive(!active)
  }

  const menu = (
    <div className={`${active ? burg.inActive : burg.mob}`}>
      <div className={burg.mob_head}>
        <ul>
          <li>
            <FaUserAlt /> Log In
          </li>
          <li>Get Sky Sports</li>
        </ul>
      </div>
      <div className={burg.mob_body}>
        <ul>
          <li>Home</li>
          <li>
            Sports <RiArrowDownSLine />
          </li>
          <li>Scores</li>
          <li>Video</li>
          <li>TV</li>
          <li>Sky Bet</li>
          <li>Games</li>
          <li>
            More <RiArrowDownSLine />
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div
      className={burg.ham}
      onClick={() => {
        toggleMobileMenu()
      }}
    >
      <IoMdMenu className={burg.menu} />
      {menu}
    </div>
  )
}

export default Burger
