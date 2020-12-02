import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import PropTypes from "prop-types"

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
