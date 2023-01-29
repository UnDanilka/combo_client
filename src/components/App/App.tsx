import Navbar from '../Navbar/Navbar'
import Main from '../Page1/Main'
import Todos from '../Page2/Todos'
import Contacts from '../Page3/Contacts'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { useContext } from 'react'
import ComboContext from '../../Context/ComboContext'
import Drawer from '../Drawer/Drawer'
import { ethers } from 'ethers'
import { todoABI, todoAddress } from '../../utils/constants'
import { Button } from 'antd'

function App() {
  const { theme } = useContext(ComboContext)

  const { ethereum } = window

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert('Wallet is not connected')
      } else {
        await ethereum.request({
          method: 'eth_requestAccounts',
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  const getTodoContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const todoContract = new ethers.Contract(todoAddress, todoABI, signer)

    return todoContract
  }

  const getTodos = async () => {
    const todoContract = getTodoContract()
    console.log(todoContract)
    const todos = await todoContract.getTodos()
    console.log(todos)
  }

  const addTodo = async () => {
    const todoContract = getTodoContract()
    console.log(todoContract)
    const addTodosHash = await todoContract.addTodo(2, 'naila')

    await addTodosHash.wait()
    console.log(addTodosHash)
  }
  const deleteTodo = async () => {
    const todoContract = getTodoContract()
    console.log(todoContract)
    const deleteTodosHash = await todoContract.deleteTodo(1)

    await deleteTodosHash.wait()
    console.log(deleteTodosHash)
  }

  const connect = () => {
    connectWallet()
  }

  return (
    <div className={`app ${theme === 'light' ? 'light' : 'dark'}`}>
      <Drawer />
      <Navbar />
      <Button onClick={getTodos}>getTodos</Button>
      <Button onClick={addTodo}>addTodos</Button>
      <Button onClick={deleteTodo}>deleteTodo</Button>
      <Button onClick={connect}>Connect</Button>
      <div className='app_pages'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/todos/*' element={<Todos />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
