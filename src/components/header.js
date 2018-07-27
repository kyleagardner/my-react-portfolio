import React from 'react'
import Link from 'gatsby-link'
import GatsbyLink from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src="https://i.imgur.com/yYuSsXi.png" width="30" />
      </Link>
      <Link to="/">Projects</Link>
      <Link to="/">Blog</Link>
      <Link to="/">
        <button>Get in touch</button>
      </Link>
    </div>
  </div>
)

export default Header
