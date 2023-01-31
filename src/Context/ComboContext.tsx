import { createContext, useEffect, useState } from 'react'
import { getTodos } from '../APIs/apis'
import { getTodoContract, getTodosBC } from '../Blockchain/methods'
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
  isDrawer: false,
  handleUpdateIsDrawer: (is: boolean) => {},
  links: [{ title: '', link: '' }],
  currentAccount: '',
})

export const ComboProvider = ({ children }: IComboProvider) => {
  const { ethereum } = window
  const [theme, setTheme] = useState<string>('light')
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [todoListServer, setTodoListServer] = useState<ITodo[]>([])
  const [todoListBC, setTodoListBC] = useState<ITodo[]>([])
  const [currentAccount, setCurrentAccount] = useState<string>('')
  const [isDrawer, setIsDrawer] = useState<boolean>(false)
  const [provider] = useState(ethereum)

  useEffect(() => {
    if (provider) {
      getTodoContract().on('TodosUpdate', (e) => {
        setTodoListBC(e)
      })
    }
  }, [provider])

  useEffect(() => {
    getTodos().then((res) => setTodoListServer(res))
  }, [])

  useEffect(() => {
    if (provider) {
      const getTodosFromContract = async () => {
        const todos = await getTodosBC()
        console.log(todos)

        setTodoListBC(todos)
      }
      getTodosFromContract()
    }
  }, [currentAccount, provider])

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
        handleUpdateAccount,
        currentAccount,
      }}
    >
      {children}
    </ComboContext.Provider>
  )
}

export default ComboContext
