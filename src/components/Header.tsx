import { Link } from 'react-router-dom'
import { useUIContext } from '@context/UIProvider'

const Header = () => {
  const { toggleSidebar } = useUIContext()

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button onClick={() => toggleSidebar()} type="button" className="nav-link">
            <i className="fas fa-bars" />
          </button>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">{/* AQUI VAN LOS MÓDULOS */}</ul>
    </nav>
  )
}

export default Header
