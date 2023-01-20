import { createContext, useState } from 'react'
import { IComboProvider } from '../Types/types'

const ComboContext = createContext({ theme: 'light', handleUpdateTheme: (type: string) => {} })

export const ComboProvider = ({ children }: IComboProvider) => {
  const [theme, setTheme] = useState('light')
  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }

  return <ComboContext.Provider value={{ theme, handleUpdateTheme }}>{children}</ComboContext.Provider>
}

export default ComboContext
