/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import AOS from "aos"
import GoTop from "./GoTop"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main>{children}</main>

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  )
}

export default Layout
