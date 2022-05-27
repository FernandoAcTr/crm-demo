import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useUIContext } from '@globals/context/UIProvider'
import Header from '@globals/components/Header'
import MenuSidebar from '@globals/components/MenuSidebar'
import Footer from '@globals/components/Footer'
import { addWindowClass, removeWindowClass } from '@utils/helpers'

const MainLayout = () => {
  const { isSidebarCollapsed, toggleSidebar } = useUIContext()

  useEffect(() => {
    removeWindowClass('register-page')
    removeWindowClass('login-page')
    removeWindowClass('hold-transition')

    addWindowClass('sidebar-mini')

    return () => {
      removeWindowClass('sidebar-mini')
    }
  }, [])

  useEffect(() => {
    removeWindowClass('sidebar-closed')
    removeWindowClass('sidebar-collapse')
    removeWindowClass('sidebar-open')
    if (isSidebarCollapsed) {
      addWindowClass('sidebar-collapse')
    } else {
      addWindowClass('sidebar-open')
    }
  }, [isSidebarCollapsed])

  return (
    <>
      <div className="wrapper">
        <Header />
        <MenuSidebar />
        <div className="content-wrapper">
          <div className="pt-3" />
          <section className="content">
            <Outlet />
          </section>
        </div>

        <Footer />
        <div id="sidebar-overlay" role="presentation" onClick={() => toggleSidebar()} onKeyDown={() => {}} />
      </div>
    </>
  )
}

export default MainLayout
