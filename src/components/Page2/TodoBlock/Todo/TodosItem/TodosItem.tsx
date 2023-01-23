import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import ComboContext from '../../../../../Context/ComboContext'
import { motion } from 'framer-motion'
import { ITodo } from '../../../../../Types/types'

const iconStyle = { color: 'white', fontSize: '30px' }
const motionRules = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { duration: 0.5 },
}

const TodosItem = ({ value, done, id }: ITodo) => {
  const { todoList, handleUpdateTodoList } = useContext(ComboContext)

  const handleSetDone = () => {
    const prevTodoList = [...todoList]
    const updatedTodoList = prevTodoList.map((todo: ITodo) => {
      if (todo.id === id) {
        return { ...todo, done: true }
      }
      return todo
    })
    handleUpdateTodoList(updatedTodoList)
  }

  const handleRemove = () => {
    const prevTodoList: ITodo[] = [...todoList]
    const idx = prevTodoList.findIndex((item: ITodo) => item.id === id)
    prevTodoList.splice(idx, 1)
    handleUpdateTodoList(prevTodoList)
  }

  return (
    <motion.div {...motionRules} layout className='item'>
      <div className={`item_title ${done && 'item_completed'}`}>
        <div className={`item_title_text ${done && 'done'}`}>{value}</div>
      </div>
      <div onClick={handleRemove} className='item_delete'>
        <CloseOutlined style={iconStyle} />
      </div>
      <div onClick={handleSetDone} className='item_done'>
        <CheckOutlined style={iconStyle} />
      </div>
    </motion.div>
  )
}

export default TodosItem
