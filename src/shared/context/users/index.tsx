/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'
import { ChildrenProps } from '../../interfaces/childrenProps'
import { UsersResponse } from '../../interfaces/users'

export type UsersType = UsersResponse[]

type PropsUsersContext = {
  users: UsersType
  setUsers: React.Dispatch<React.SetStateAction<UsersType>>
}

const DEFAULT_VALUE = {
  users: [],
  setUsers: () => {},
}

const UsersContext = createContext<PropsUsersContext>(DEFAULT_VALUE)

const UsersContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [users, setUsers] = useLocalStorage<UsersType>(
    'users',
    DEFAULT_VALUE.users
  )

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
export { UsersContextProvider }
export default UsersContext
