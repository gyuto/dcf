/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Menu from "./menu"
import menuContent from "./menu/content"
import Footer from "./footer"
import Spacer from "./spacer"
import "../styles/layout.css"
import initFirestore from "../lib/firebase"

class Layout extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Menu content={menuContent} />
            <div
              style={{
                height: 30,
              }}
            />
            {this.props.children}
            <Footer />
            <Spacer height={30} />
          </>
        )}
      />
    )
  }

  componentDidMount() {
    initFirestore()
  }
}

export default Layout
