import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@globals/components/Header'
import Drawer from '@globals/components/Drawer'
import Footer from '@globals/components/Footer'
import { addWindowClass, removeWindowClass } from '@utils/helpers'
import { useSelector } from 'react-redux'
import { uiCreators } from '@globals/state/ui/ui.creators'
import { State } from '@src/store'
import { useBindCreators } from '@globals/hooks/useBindCreators'

const MainLayout = () => {
  const { toggleSidebar } = useBindCreators(uiCreators)

  const { isSidebarCollapsed } = useSelector((state: State) => state.ui)

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
        <Drawer />
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
