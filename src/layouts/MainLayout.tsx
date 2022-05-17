import { Outlet } from 'react-router-dom'
import Header from '@components/Header'
import MenuSidebar from '../components/MenuSidebar'

const MainLayout = () => {
  return (
    <>
      <Header />
      <MenuSidebar />
      <Outlet />
    </>
  )
}

export default MainLayout
