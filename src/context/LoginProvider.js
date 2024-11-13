import React, { createContext, useContext, useState } from 'react'

const LoginContext = createContext()

export default function LoginProvider({ children }) {
  const [isLogged, setIsLogged] = useState((localStorage.getItem("username") != null)? true:false)


  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext)
