import { Outlet } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import { useState } from 'react'

const MainLayout = () => {
  const [isFullPageLayout, setIsFullPageLayout] = useState(false)

  let navbarComponent = !isFullPageLayout ? <Navbar /> : null
  let sidebarComponent = !isFullPageLayout ? <Sidebar /> : null
  let footerComponent = !isFullPageLayout ? <Footer /> : null

  return (
    <>
      <div className="container-scroller">
        {navbarComponent}
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              <Outlet />
            </div>
            {footerComponent}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout
