import { createContext, useState } from 'react'

const ComboContext = createContext({ theme: 'light', handleUpdateTheme: (type: string) => {} })

export const ComboProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('light')
  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }

  return <ComboContext.Provider value={{ theme, handleUpdateTheme }}>{children}</ComboContext.Provider>
}

export default ComboContext
