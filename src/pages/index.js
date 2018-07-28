import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>👋🏻 I'm Kyle. I build and manage digital products.</h1>
        <p>
          I currently work on the product team at Restoration Media in Irvine,
          California
        </p>
        <Link to="/page-2/">Check out my work</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
