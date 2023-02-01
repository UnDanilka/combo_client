import { Input } from 'antd'
import { useContext, useState } from 'react'
import TodosItem from './TodosItem/TodosItem'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ITodo, ITodoComponent } from '../../../../Types/types'
import openNotification from '../../../Notification/notification'
import { v4 as uuidv4 } from 'uuid'
import ThemeContext from '../../../../Context/ThemeContext'

const motionRules = {
  initial: { y: -100 },
  animate: { y: 0 },
  exit: { y: -100 },
  transition: { duration: 0.5 },
}

const Todo = ({ handleAdd, todoList, handleSetDone, handleRemove, color }: ITodoComponent) => {
  const { theme } = useContext(ThemeContext)
  const [inputValue, setInputValue] = useState('')

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTodoValidate()
    }
  }

  const handleTodoValidate = () => {
    if (inputValue === '') {
      openNotification('error', 'Please enter a value')
      return
    }
    const todo = { value: inputValue, done: false, id: uuidv4() }
    handleAdd(todo, setInputValue)
  }

  return (
    <div className='todo'>
      <div className='todo_input'>
        <Input
          style={{ color: theme === 'light' ? 'black' : 'white', borderColor: color }}
          className={`todo_input_field  ${todoList.length === 0 && 'todo_input_field-empty'}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleEnterDown(e)}
        />
        <div
          onClick={handleTodoValidate}
          className={`todo_input_btn ${todoList.length === 0 && 'todo_input_btn-empty'}`}
          style={{ backgroundColor: color }}
        >
          <div className='todo_input_btn_text'>ADD</div>
        </div>
      </div>
      <div className='todo_wrapper'>
        <AnimatePresence>
          {todoList.length > 0 && (
            <LayoutGroup>
              <motion.div layout {...motionRules} className='todo_wrapper_items' style={{ borderColor: color }}>
                <AnimatePresence>
                  {todoList.map(({ value, done, id }: ITodo) => {
                    return (
                      <TodosItem
                        value={value}
                        done={done}
                        id={id}
                        key={id}
                        handleSetDone={handleSetDone}
                        handleRemove={handleRemove}
                      />
                    )
                  })}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Todo
