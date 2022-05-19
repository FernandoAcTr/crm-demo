import { createContext, useContext, useState } from 'react'

interface UIProvider {
  isSidebarCollapsed: boolean
  toggleSidebar: () => void
}

const UIContext = createContext<UIProvider | null>(null)

export const UIProvider = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <UIContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export const useUIContext = () => {
  return useContext(UIContext)!
}
