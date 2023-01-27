import { createContext, useEffect, useState } from 'react'
import { getTodos } from '../APIs/apis'
import { IComboProvider, ITodo } from '../Types/types'

const todoDefault = { value: '', id: '', done: false }

const links = [
  { title: 'Main', link: '/' },
  { title: 'Todo', link: '/todos' },
  { title: 'Contacts', link: '/contacts' },
]

const ComboContext = createContext({
  theme: 'light',
  handleUpdateTheme: (type: string) => {},
  todoList: [todoDefault],
  handleUpdateTodoList: (props: ITodo[]) => {},
  todoListServer: [todoDefault],
  handleUpdateTodoListServer: (props: ITodo[]) => {},
  isDrawer: false,
  handleUpdateIsDrawer: (is: boolean) => {},
  links: [{ title: '', link: '' }],
})

export const ComboProvider = ({ children }: IComboProvider) => {
  const [theme, setTheme] = useState<string>('light')
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [todoListServer, setTodoListServer] = useState<ITodo[]>([])
  const [isDrawer, setIsDrawer] = useState<boolean>(false)

  useEffect(() => {
    getTodos().then((res) => setTodoListServer(res))
  }, [])

  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }
  const handleUpdateTodoList = (props: ITodo[]) => {
    setTodoList(props)
  }
  const handleUpdateTodoListServer = (props: ITodo[]) => {
    setTodoListServer(props)
  }
  const handleUpdateIsDrawer = (is: boolean) => {
    setIsDrawer(is)
  }

  return (
    <ComboContext.Provider
      value={{
        theme,
        handleUpdateTheme,
        todoList,
        handleUpdateTodoList,
        isDrawer,
        handleUpdateIsDrawer,
        links,
        todoListServer,
        handleUpdateTodoListServer,
      }}
    >
      {children}
    </ComboContext.Provider>
  )
}

export default ComboContext
