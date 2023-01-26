import { Input } from 'antd'
import { useContext, useState } from 'react'
import ComboContext from '../../../../Context/ComboContext'
import TodosItem from './TodosItem/TodosItem'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { ITodo, ITodoComponent } from '../../../../Types/types'

const Todo = ({ handleAdd, todoList, handleSetDone, handleRemove, color }: ITodoComponent) => {
  const { theme } = useContext(ComboContext)
  const [inputValue, setInputValue] = useState('')

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd(inputValue, setInputValue)
    }
  }

  const motionRules = {
    initial: { y: -100 },
    animate: { y: 0 },
    exit: { y: -100 },
    transition: { duration: 0.5 },
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
          onClick={() => handleAdd(inputValue, setInputValue)}
          className={`todo_input_btn ${todoList.length === 0 && 'todo_input_btn-empty'}`}
          style={{ backgroundColor: color }}
        >
          <div className='todo_input_btn_text'>ADD</div>
        </div>
      </div>
      <div className='todo_wrapper'>
        <AnimatePresence>
          {todoList.length > 0 && (
            <AnimateSharedLayout>
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
            </AnimateSharedLayout>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Todo
