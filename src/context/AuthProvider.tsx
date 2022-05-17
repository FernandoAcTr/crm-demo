import { createContext, useContext, useState } from 'react'
import { AuthServices } from '@services/index'

interface AuthProvider {
  isLoggedIn: boolean
  doLogIn: (user: string, password: string) => Promise<void>
  doLogOut: () => void
}

const AuthContext = createContext<AuthProvider | null>(null)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const doLogIn = async (user: string, password: string) => {
    const resp = await AuthServices.login(user, password)
    setIsLoggedIn(resp)
  }

  const doLogOut = async () => {
    const resp = await AuthServices.logout()
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        doLogIn,
        doLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)!
}
