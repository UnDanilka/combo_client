import { Input } from 'antd'
import { useContext, useState } from 'react'
import ComboContext from '../../../../Context/ComboContext'
import { v4 as uuidv4 } from 'uuid'
import TodosItem from './TodosItem/TodosItem'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { ITodo } from '../../../../Types/types'

const Todo = () => {
  const { theme, todoList, handleUpdateTodoList } = useContext(ComboContext)
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (inputValue === '') {
      console.log('no value')
      return
    }
    const prevTodoList: ITodo[] = [...todoList]
    prevTodoList.push({ value: inputValue, done: false, id: uuidv4() })

    handleUpdateTodoList(prevTodoList)
    setInputValue('')
  }

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd()
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
          style={{ color: theme === 'light' ? 'black' : 'white' }}
          className={`todo_input_field ${todoList.length === 0 && 'todo_input_field-empty'}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => handleEnterDown(e)}
        />
        <div onClick={handleAdd} className={`todo_input_btn ${todoList.length === 0 && 'todo_input_btn-empty'}`}>
          <div className='todo_input_btn_text'>ADD</div>
        </div>
      </div>
      <div className='todo_wrapper'>
        <AnimatePresence>
          {todoList.length > 0 && (
            <AnimateSharedLayout>
              <motion.div layout {...motionRules} className='todo_wrapper_items'>
                <AnimatePresence>
                  {todoList.map(({ value, done, id }: ITodo) => {
                    return <TodosItem value={value} done={done} id={id} key={id} />
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
