import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div style={{backgroundColor: `#18181A`}}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          minHeight: `100vh`
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
