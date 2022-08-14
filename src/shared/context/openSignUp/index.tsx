/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'
import { ChildrenProps } from '../../interfaces/childrenProps'

export type OpenSignUpType = boolean

type PropsOpenSignUpContext = {
  openSignUp: OpenSignUpType
  setOpenSignUp: React.Dispatch<React.SetStateAction<OpenSignUpType>>
}

const DEFAULT_VALUE = {
  openSignUp: false,
  setOpenSignUp: () => {},
}

const OpenSignUpContext = createContext<PropsOpenSignUpContext>(DEFAULT_VALUE)

const OpenSignUpContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [openSignUp, setOpenSignUp] = useState<OpenSignUpType>(
    DEFAULT_VALUE.openSignUp
  )

  return (
    <OpenSignUpContext.Provider
      value={{
        openSignUp,
        setOpenSignUp,
      }}
    >
      {children}
    </OpenSignUpContext.Provider>
  )
}
export { OpenSignUpContextProvider }
export default OpenSignUpContext
