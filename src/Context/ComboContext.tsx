import { createContext, useEffect, useState } from 'react'
import { getTodos } from '../APIs/apis'
import { getTodosBC } from '../Blockchain/methods'
import { IComboProvider, ITodo } from '../Types/types'

const todoDefault = { value: '', id: '', done: false }
const setTodoListDefault = (props: ITodo[]) => {}

const links = [
  { title: 'Main', link: '/' },
  { title: 'Todo', link: '/todos' },
  { title: 'Contacts', link: '/contacts' },
]

const ComboContext = createContext({
  theme: 'light',
  handleUpdateTheme: (type: string) => {},
  handleUpdateAccount: (account: string) => {},
  todoList: [todoDefault],
  handleUpdateTodoList: setTodoListDefault,
  todoListServer: [todoDefault],
  handleUpdateTodoListServer: setTodoListDefault,
  todoListBC: [todoDefault],
  handleUpdateTodoListBC: setTodoListDefault,
  isDrawer: false,
  handleUpdateIsDrawer: (is: boolean) => {},
  links: [{ title: '', link: '' }],
})

export const ComboProvider = ({ children }: IComboProvider) => {
  const [theme, setTheme] = useState<string>('light')
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [todoListServer, setTodoListServer] = useState<ITodo[]>([])
  const [todoListBC, setTodoListBC] = useState<ITodo[]>([])
  const [currentAccount, setCurrentAccount] = useState<string>('')
  const [isDrawer, setIsDrawer] = useState<boolean>(false)

  useEffect(() => {
    getTodos().then((res) => setTodoListServer(res))
  }, [])

  useEffect(() => {
    const getTodosFromContract = async () => {
      const todos = await getTodosBC()
      console.log(todos)

      setTodoListBC(todos)
    }
    getTodosFromContract()
  }, [currentAccount])

  const handleUpdateTheme = (type: string) => {
    setTheme(type)
  }
  const handleUpdateAccount = (account: string) => {
    setCurrentAccount(account)
  }
  const handleUpdateTodoList = (props: ITodo[]) => {
    setTodoList(props)
  }
  const handleUpdateTodoListServer = (props: ITodo[]) => {
    setTodoListServer(props)
  }
  const handleUpdateTodoListBC = (props: ITodo[]) => {
    setTodoListBC(props)
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
        todoListBC,
        handleUpdateTodoListBC,
        handleUpdateAccount,
      }}
    >
      {children}
    </ComboContext.Provider>
  )
}

export default ComboContext
