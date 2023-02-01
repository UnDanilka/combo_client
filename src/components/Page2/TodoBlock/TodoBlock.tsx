/* eslint-disable no-unreachable */
import { IColors, ITodo, ITodoBlock } from '../../../Types/types'
import Todo from './Todo/Todo'
import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'
import { addTodos, removeTodos, setDoneTodos } from '../../../APIs/apis'
import { addTodo, deleteTodoBC, updateTodoBC } from '../../../Blockchain/methods'
import openNotification from '../../Notification/notification'

import BlockchainConnect from './BlockchainConnect/BlockchainConnect'

const colors: IColors = { state: '#5059be9a', server: '#be50be9a', blockchain: '#38b1489a' }

export const { ethereum } = window

const TodoBlock = ({ text, img, label }: ITodoBlock) => {
  const {
    todoList,
    handleUpdateTodoList,
    todoListServer,
    handleUpdateTodoListServer,
    todoListBC,
    currentAccount,
    handleUpdateIsSpinner,
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
          handleUpdateIsSpinner(true)
          const updatedTodoList = await addTodos(todo)
          handleUpdateIsSpinner(false)
          handleUpdateTodoListServer(updatedTodoList)
          setInputValue('')
        }
        break
      case 'blockchain':
        return async (todo: ITodo, setInputValue: (state: string) => void) => {
          if (currentAccount) {
            handleUpdateIsSpinner(true)
            await addTodo(todo)
            handleUpdateIsSpinner(false)
            setInputValue('')
          } else {
            openNotification('error', 'Please connect wallet')
            setInputValue('')
          }
        }
        break
      default:
        return () => {}
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
          handleUpdateIsSpinner(true)
          const updatedTodoList = await setDoneTodos(id)
          handleUpdateIsSpinner(false)

          handleUpdateTodoListServer(updatedTodoList)
        }
        break
      case 'blockchain':
        return async (id: string) => {
          handleUpdateIsSpinner(true)
          await updateTodoBC(id)
          handleUpdateIsSpinner(false)
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
          handleUpdateIsSpinner(true)
          const updatedTodoList = await removeTodos(id)
          handleUpdateIsSpinner(false)

          handleUpdateTodoListServer(updatedTodoList)
        }
        break
      case 'blockchain':
        return async (id: string) => {
          handleUpdateIsSpinner(true)
          await deleteTodoBC(id)
          handleUpdateIsSpinner(false)
        }
        break
      default:
        return () => {}
    }
  }

  return (
    <div className='block'>
      <div className='block_info'>
        <div className='block_info_text'>{text}</div>
        <div className='block_info_img'>
          <img src={img} alt='alt' className='block_info_img_content' />
        </div>
      </div>
      {label === 'blockchain' && <BlockchainConnect />}
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
