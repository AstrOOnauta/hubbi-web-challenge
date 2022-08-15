import { ThemeProvider } from '@mui/system'
import React from 'react'

import { ChildrenProps } from '../interfaces/childrenProps'
import { Theme } from '../themes'
import { LoginContextProvider } from './login'
import { OpenLoginContextProvider } from './openLogin'
import { OpenSignUpContextProvider } from './openSignUp'

const GlobalContext: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <LoginContextProvider>
        <OpenLoginContextProvider>
          <OpenSignUpContextProvider>{children}</OpenSignUpContextProvider>
        </OpenLoginContextProvider>
      </LoginContextProvider>
    </ThemeProvider>
  )
}

export default GlobalContext
