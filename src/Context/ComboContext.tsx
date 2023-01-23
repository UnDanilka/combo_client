import { createContext, useState } from 'react'
import { IComboProvider } from '../Types/types'

const ComboContext = createContext({
  theme: 'light',
  handleUpdateTheme: (type: string) => {},
  todoList: [],
  handleUpdateTodoList: (props: any) => {},
})

export const ComboProvider = ({ children }: IComboProvider) => {
  const [theme, setTheme] = useState('light')
  const [todoList, setTodoList] = useState<any>([])

  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }
  const handleUpdateTodoList = (props: any) => {
    setTodoList(props)
  }

  return (
    <ComboContext.Provider value={{ theme, handleUpdateTheme, todoList, handleUpdateTodoList }}>
      {children}
    </ComboContext.Provider>
  )
}

export default ComboContext
