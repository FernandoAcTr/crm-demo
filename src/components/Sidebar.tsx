import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Collapse } from 'react-bootstrap'
import { Trans } from 'react-i18next'
import face4 from '@assets/img/face4.jpg'

const Sidebar = () => {
  const { pathname } = useLocation()

  const [basicUiMenuOpen, setBasicUiMenuOpen] = useState(false)
  const [formElementsMenuOpen, setFormElementsMenuOpen] = useState(false)
  const [tablesMenuOpen, setTablesMenuOpen] = useState(false)
  const [iconsMenuOpen, setIconsMenuOpen] = useState(false)
  const [chartsMenuOpen, setChartsMenuOpen] = useState(false)
  const [userPagesMenuOpen, setUserPagesMenuOpen] = useState(false)
  const [errorPagesMenuOpen, setErrorPagesMenuOpen] = useState(false)
  const [generalPagesMenuOpen, setGeneralPagesMenuOpen] = useState(false)

  function isPathActive(path: string) {
    return pathname == path
  }

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="!#" className="nav-link" onClick={(evt) => evt.preventDefault()}>
            <div className="nav-profile-image">
              <img src={face4} alt="profile" />
              <span className="login-status online"></span> {/* change to offline or busy as needed */}
            </div>
            <div className="nav-profile-text">
              <span className="font-weight-bold mb-2">
                <Trans>David Grey. H</Trans>
              </span>
              <span className="text-secondary text-small">
                <Trans>Project Manager</Trans>
              </span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        <li className={isPathActive('/dashboard') ? 'nav-item active' : 'nav-item'}>
          <Link className="nav-link" to="/dashboard">
            <span className="menu-title">
              <Trans>Dashboard</Trans>
            </span>
            <i className="mdi mdi-home menu-icon"></i>
          </Link>
        </li>
        <li className={isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item'}>
          <div
            className={basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setBasicUiMenuOpen(!basicUiMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>Basic UI Elements</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
          </div>
          <Collapse in={basicUiMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'}
                  to="/basic-ui/buttons"
                >
                  <Trans>Buttons</Trans>
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link'}
                  to="/basic-ui/dropdowns"
                >
                  <Trans>Dropdowns</Trans>
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link'}
                  to="/basic-ui/typography"
                >
                  <Trans>Typography</Trans>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/form-elements') ? 'nav-item active' : 'nav-item'}>
          <div
            className={formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setFormElementsMenuOpen(!formElementsMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>Form Elements</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
          </div>
          <Collapse in={formElementsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link'}
                  to="/form-elements/basic-elements"
                >
                  <Trans>Basic Elements</Trans>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/tables') ? 'nav-item active' : 'nav-item'}>
          <div
            className={tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setTablesMenuOpen(!tablesMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>Tables</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-table-large menu-icon"></i>
          </div>
          <Collapse in={tablesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link'}
                  to="/tables/basic-table"
                >
                  <Trans>Basic Table</Trans>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/icons') ? 'nav-item active' : 'nav-item'}>
          <div
            className={iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setIconsMenuOpen(!iconsMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>Icons</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-contacts menu-icon"></i>
          </div>
          <Collapse in={iconsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link className={isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link'} to="/icons/mdi">
                  <Trans>Material</Trans>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/charts') ? 'nav-item active' : 'nav-item'}>
          <div
            className={chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setChartsMenuOpen(!chartsMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>Charts</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-chart-bar menu-icon"></i>
          </div>
          <Collapse in={chartsMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link'}
                  to="/charts/chart-js"
                >
                  <Trans>Chart Js</Trans>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/user-pages') ? 'nav-item active' : 'nav-item'}>
          <div
            className={userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setUserPagesMenuOpen(!userPagesMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>User Pages</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-lock menu-icon"></i>
          </div>
          <Collapse in={userPagesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link'}
                  to="/user-pages/login-1"
                >
                  <Trans>Login</Trans>
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link'}
                  to="/user-pages/register-1"
                >
                  <Trans>Register</Trans>
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/user-pages/lockscreen') ? 'nav-link active' : 'nav-link'}
                  to="/user-pages/lockscreen"
                >
                  <Trans>Lockscreen</Trans>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/error-pages') ? 'nav-item active' : 'nav-item'}>
          <div
            className={errorPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setErrorPagesMenuOpen(!errorPagesMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>Error Pages</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-security menu-icon"></i>
          </div>
          <Collapse in={errorPagesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link'}
                  to="/error-pages/error-404"
                >
                  404
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link'}
                  to="/error-pages/error-500"
                >
                  500
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className={isPathActive('/general-pages') ? 'nav-item active' : 'nav-item'}>
          <div
            className={generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'}
            onClick={() => setGeneralPagesMenuOpen(!generalPagesMenuOpen)}
            data-toggle="collapse"
          >
            <span className="menu-title">
              <Trans>General Pages</Trans>
            </span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-medical-bag menu-icon"></i>
          </div>
          <Collapse in={generalPagesMenuOpen}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {' '}
                <Link
                  className={isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link'}
                  to="/general-pages/blank-page"
                >
                  <Trans>Blank Page</Trans>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="http://bootstrapdash.com/demo/purple-react-free/documentation/documentation.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="menu-title">
              <Trans>Documentation</Trans>
            </span>
            <i className="mdi mdi-file-document-box menu-icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
