import { createContext, useState } from 'react'
import { IComboProvider, ITodo } from '../Types/types'

const ComboContext = createContext({
  theme: 'light',
  handleUpdateTheme: (type: string) => {},
  todoList: [{ value: '', id: '', done: false }],
  handleUpdateTodoList: (props: ITodo[]) => {},
})

export const ComboProvider = ({ children }: IComboProvider) => {
  const [theme, setTheme] = useState<string>('light')
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }
  const handleUpdateTodoList = (props: ITodo[]) => {
    setTodoList(props)
  }

  return (
    <ComboContext.Provider value={{ theme, handleUpdateTheme, todoList, handleUpdateTodoList }}>
      {children}
    </ComboContext.Provider>
  )
}

export default ComboContext
