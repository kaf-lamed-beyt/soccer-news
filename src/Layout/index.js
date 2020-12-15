import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import PropTypes from "prop-types"
import axios from "axios"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children} 
      <Footer />
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
