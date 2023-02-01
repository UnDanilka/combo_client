import { createContext, useState } from 'react'
import { IComboProvider } from '../Types/types'

const ThemeContext = createContext({
  theme: 'light',
  handleUpdateTheme: (type: string) => {},
})

export const ThemeProvider = ({ children }: IComboProvider) => {
  const [theme, setTheme] = useState<string>('light')

  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleUpdateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
