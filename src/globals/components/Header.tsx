import { Link } from 'react-router-dom'
import { uiCreators } from '@globals/state/ui/ui.creators'
import { useBindCreators } from '@globals/hooks/useBindCreators'

const Header = () => {
  const { toggleSidebar } = useBindCreators(uiCreators)

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
      <ul className="navbar-nav ml-auto">
        <button className="btn btn-transparent">Servicios</button>
        <button className="btn btn-transparent">072</button>
        <button className="btn btn-transparent">Bitácora</button>
      </ul>
    </nav>
  )
}

export default Header
