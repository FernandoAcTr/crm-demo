import { Link } from 'react-router-dom'
import MenuItem, { IMenuItem } from './MenuItem'
import logo from '@assets/img/dummy-logo.png'
import defaultProfileImg from '@assets/img/default-profile.png'

export const MENU: IMenuItem[] = [
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'Blank',
    path: '/blank',
  },
  {
    name: '2 levels',
    children: [
      {
        name: 'Submenu',
        path: '/sub-menu-1',
      },

      {
        name: 'Blank',
        path: '/sub-menu-2',
      },
    ],
  },
  {
    name: 'Ejemplos',
    children: [
      {
        name: 'Datatables',
        path: '/datatables',
      },
    ],
  },
]

const MenuSidebar = () => {
  return (
    <aside className={`main-sidebar elevation-4 sidebar-light-purple`}>
      <Link to="/" className="brand-link">
        <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={defaultProfileImg} className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <Link to="/profile" className="d-block">
              admin@example.com
            </Link>
          </div>
        </div>
        <nav className="mt-2" style={{ overflowY: 'scroll' }}>
          <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" role="menu">
            {MENU.map((menuItem: IMenuItem) => (
              <MenuItem key={menuItem.name} menuItem={menuItem} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default MenuSidebar
