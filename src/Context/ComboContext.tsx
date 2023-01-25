import { createContext, useState } from 'react'
import { IComboProvider, ITodo } from '../Types/types'

const ComboContext = createContext({
  theme: 'light',
  handleUpdateTheme: (type: string) => {},
  todoList: [{ value: '', id: '', done: false }],
  handleUpdateTodoList: (props: ITodo[]) => {},
  isDrawer: false,
  handleUpdateIsDrawer: (is: boolean) => {},
  links: [{ title: '', link: '' }],
})

const links = [
  { title: 'Main', link: '/' },
  { title: 'Todo', link: '/todos' },
  { title: 'Contacts', link: '/contacts' },
]

export const ComboProvider = ({ children }: IComboProvider) => {
  const [theme, setTheme] = useState<string>('light')
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [isDrawer, setIsDrawer] = useState<boolean>(false)

  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }
  const handleUpdateTodoList = (props: ITodo[]) => {
    setTodoList(props)
  }
  const handleUpdateIsDrawer = (is: boolean) => {
    setIsDrawer(is)
  }

  return (
    <ComboContext.Provider
      value={{ theme, handleUpdateTheme, todoList, handleUpdateTodoList, isDrawer, handleUpdateIsDrawer, links }}
    >
      {children}
    </ComboContext.Provider>
  )
}

export default ComboContext
