/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { ChildrenProps } from '../interfaces/childrenProps'

export type OpenLoginType = boolean

type PropsOpenLoginContext = {
  openLogin: OpenLoginType
  setOpenLogin: React.Dispatch<React.SetStateAction<OpenLoginType>>
}

const DEFAULT_VALUE = {
  openLogin: false,
  setOpenLogin: () => {},
}

const OpenLoginContext = createContext<PropsOpenLoginContext>(DEFAULT_VALUE)

const OpenLoginContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [openLogin, setOpenLogin] = useLocalStorage<OpenLoginType>(
    'openLogin',
    DEFAULT_VALUE.openLogin
  )

  return (
    <OpenLoginContext.Provider
      value={{
        openLogin,
        setOpenLogin,
      }}
    >
      {children}
    </OpenLoginContext.Provider>
  )
}
export { OpenLoginContextProvider }
export default OpenLoginContext
