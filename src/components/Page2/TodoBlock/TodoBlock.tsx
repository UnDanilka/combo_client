/* eslint-disable no-unreachable */
import { IColors, ITodo, ITodoBlock } from '../../../Types/types'
import Todo from './Todo/Todo'
import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'
import { addTodos, removeTodos, setDoneTodos } from '../../../APIs/apis'
import { Button } from 'antd'
import { addTodo, connectWallet, deleteTodoBC, getTodosBC, updateTodoBC } from '../../../Blockchain/methods'

const colors: IColors = { state: '#5059be9a', server: '#be50be9a', blockchain: '#38b1489a' }

const TodoBlock = ({ text, img, label }: ITodoBlock) => {
  const {
    todoList,
    handleUpdateTodoList,
    todoListServer,
    handleUpdateTodoListServer,
    handleUpdateAccount,
    todoListBC,
  } = useContext(ComboContext)

  const currentTodoList = () => {
    switch (label) {
      case 'state':
        return todoList
        break
      case 'server':
        return todoListServer
        break
      case 'blockchain':
        return todoListBC
        break
      default:
        return []
    }
  }

  const handleAdd = () => {
    switch (label) {
      case 'state':
        return (todo: ITodo, setInputValue: (state: string) => void) => {
          const prevTodoList: ITodo[] = [...todoList]
          prevTodoList.unshift(todo)

          handleUpdateTodoList(prevTodoList)
          setInputValue('')
        }
        break
      case 'server':
        return async (todo: ITodo, setInputValue: (state: string) => void) => {
          const updatedTodoList = await addTodos(todo)
          handleUpdateTodoListServer(updatedTodoList)
          setInputValue('')
        }
        break
      case 'blockchain':
        return async (todo: ITodo, setInputValue: (state: string) => void) => {
          console.log(todo)
          await addTodo(todo)
          const updatedTodos = await getTodosBC()
          console.log(updatedTodos)
          setInputValue('')
        }
        break
      default:
        return () => console.log('default')
    }
  }

  const handleSetDone = () => {
    switch (label) {
      case 'state':
        return (id: string) => {
          const prevTodoList = [...todoList]
          const updatedTodoList = prevTodoList.map((todo: ITodo) => {
            if (todo.id === id) {
              return { ...todo, done: true }
            }
            return todo
          })
          handleUpdateTodoList(updatedTodoList)
        }
        break
      case 'server':
        return async (id: string) => {
          const updatedTodoList = await setDoneTodos(id)
          handleUpdateTodoListServer(updatedTodoList)
        }
        break
      case 'blockchain':
        return async (id: string) => {
          await updateTodoBC(id)
          const updatedTodos = await getTodosBC()
          console.log(updatedTodos)
        }
        break
      default:
        return () => {}
    }
  }

  const handleRemove = () => {
    switch (label) {
      case 'state':
        return (id: string) => {
          const prevTodoList: ITodo[] = [...todoList]
          const idx = prevTodoList.findIndex((item: ITodo) => item.id === id)
          prevTodoList.splice(idx, 1)
          handleUpdateTodoList(prevTodoList)
        }
        break
      case 'server':
        return async (id: string) => {
          const updatedTodoList = await removeTodos(id)
          handleUpdateTodoListServer(updatedTodoList)
        }
        break
      case 'blockchain':
        return async (id: string) => {
          await deleteTodoBC(id)
          const updatedTodos = await getTodosBC()
          console.log(updatedTodos)
        }
        break
      default:
        return () => {}
    }
  }

  const handleConnectWallet = async () => {
    const account = await connectWallet()
    handleUpdateAccount(account)
  }

  return (
    <div className='block'>
      <div className='block_info'>
        <div className='block_info_text'>{text}</div>
        <div className='block_info_img'>
          <img src={img} alt='alt' className='block_info_img_content' />
        </div>
      </div>
      <div className='block_chain'>
        <div className='block_chain_connect'>
          <Button onClick={handleConnectWallet}>Connect wallet</Button>
        </div>
      </div>
      <Todo
        handleAdd={handleAdd()}
        todoList={currentTodoList()}
        handleSetDone={handleSetDone()}
        handleRemove={handleRemove()}
        color={colors[label as keyof typeof colors]}
      />
    </div>
  )
}

export default TodoBlock
