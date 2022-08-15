import { ThemeProvider } from '@mui/system'
import React from 'react'

import { ChildrenProps } from '../interfaces/childrenProps'
import { Theme } from '../themes'
import { LoginContextProvider } from './login'

const GlobalContext: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <LoginContextProvider>{children}</LoginContextProvider>
    </ThemeProvider>
  )
}

export default GlobalContext
