import { ethers } from 'ethers'
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
  isSpinner: false,
  handleUpdateIsSpinner: (is: boolean) => {},
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
  const [isSpinner, setIsSpinner] = useState<boolean>(false)

  useEffect(() => {
    if (ethereum && currentAccount) {
      getTodoContract().on('TodosUpdate', (todos, address) => {
        if (address === currentAccount) {
          setTodoListBC(todos)
        }
      })
      const getTodosFromContract = async () => {
        setIsSpinner(true)
        const todos = await getTodosBC()
        setIsSpinner(false)
        setTodoListBC(todos)
      }
      getTodosFromContract()
    }
  }, [currentAccount, ethereum])

  useEffect(() => {
    ethereum.on('accountsChanged', function (accounts: string[]) {
      setCurrentAccount(accounts[0])
    })
    const getCurrentAccount = async () => {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const list = await provider.listAccounts()
      if (list[0]) {
        setCurrentAccount(list[0])
      }
    }
    getCurrentAccount()
  }, [ethereum])

  useEffect(() => {
    getTodos().then((res) => setTodoListServer(res))
  }, [])

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
  const handleUpdateIsSpinner = (is: boolean) => {
    setIsSpinner(is)
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
        isSpinner,
        handleUpdateIsSpinner,
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
