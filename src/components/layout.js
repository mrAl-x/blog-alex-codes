import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <div>
          Follow me on:
          <ul>
            <li>
              <a href="http://instagram.com/gamblingisbadalex">Instagram</a>
            </li>
            <li>
              <a href="youtube.com/channel/UCzn-oidxEc67Jwh5e8zALWA">YouTube</a>
            </li>
            {/* <li>
              <a href="">RSS Feed</a>
            </li> */}
          </ul>
        </div>
        <i>
          © {new Date().getFullYear()}, Being made by
          {` `}
          <a href="https://www.twitter.com/mral_x">@mrAl_x</a>
        </i>
      </footer>
    </div>
  )
}

export default Layout
