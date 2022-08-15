/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'
import { ChildrenProps } from '../../interfaces/childrenProps'
import { Login } from '../../interfaces/login'

export type LoginType = Login

type PropsLoginContext = {
  login: LoginType
  setLogin: React.Dispatch<React.SetStateAction<LoginType>>
}

const DEFAULT_VALUE = {
  login: { username: '', hasLogin: false },
  setLogin: () => {},
}

const LoginContext = createContext<PropsLoginContext>(DEFAULT_VALUE)

const LoginContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [login, setLogin] = useLocalStorage<LoginType>(
    'login',
    DEFAULT_VALUE.login
  )

  return (
    <LoginContext.Provider
      value={{
        login,
        setLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}
export { LoginContextProvider }
export default LoginContext
