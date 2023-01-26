/* eslint-disable no-unreachable */
import { IColors, ITodo, ITodoBlock } from '../../../Types/types'
import Todo from './Todo/Todo'
import { v4 as uuidv4 } from 'uuid'
import openNotification from '../../Notification/notification'
import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'

const colors: IColors = { state: '#5059be9a', server: '#be50be9a', blockchain: '#38b1489a' }

const TodoBlock = ({ text, img, label }: ITodoBlock) => {
  const { todoList, handleUpdateTodoList } = useContext(ComboContext)

  const handleAdd = () => {
    switch (label) {
      case 'state':
        return (inputValue: string, setInputValue: (state: string) => void) => {
          if (inputValue === '') {
            openNotification('error', 'Please enter a value')
            return
          }
          const prevTodoList: ITodo[] = [...todoList]
          prevTodoList.unshift({ value: inputValue, done: false, id: uuidv4() })

          handleUpdateTodoList(prevTodoList)
          setInputValue('')
        }
        break
      case 'server':
        return () => console.log('server')
        break
      case 'blockchain':
        return () => console.log('blockchain')
        break
      default:
        return () => console.log('default')
    }
  }

  const handleSetDone = (id: string) => {
    const prevTodoList = [...todoList]
    const updatedTodoList = prevTodoList.map((todo: ITodo) => {
      if (todo.id === id) {
        return { ...todo, done: true }
      }
      return todo
    })
    handleUpdateTodoList(updatedTodoList)
  }

  const handleRemove = (id: string) => {
    const prevTodoList: ITodo[] = [...todoList]
    const idx = prevTodoList.findIndex((item: ITodo) => item.id === id)
    prevTodoList.splice(idx, 1)
    handleUpdateTodoList(prevTodoList)
  }

  return (
    <div className='block'>
      <div className='block_info'>
        <div className='block_info_text'>{text}</div>
        <div className='block_info_img'>
          <img src={img} alt='alt' className='block_info_img_content' />
        </div>
      </div>
      <Todo
        handleAdd={handleAdd()}
        todoList={todoList}
        handleSetDone={handleSetDone}
        handleRemove={handleRemove}
        color={colors[label as keyof typeof colors]}
      />
    </div>
  )
}

export default TodoBlock
