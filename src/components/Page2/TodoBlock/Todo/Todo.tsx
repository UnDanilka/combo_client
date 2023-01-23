import { Input } from 'antd'
import { useContext, useState } from 'react'
import ComboContext from '../../../../Context/ComboContext'
import { v4 as uuidv4 } from 'uuid'
import TodosItem from './TodosItem/TodosItem'
import { AnimatePresence } from 'framer-motion'
import { ITodo } from '../../../../Types/types'

const Todo = () => {
  const { theme, todoList, handleUpdateTodoList } = useContext(ComboContext)
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    const prevTodoList: ITodo[] = [...todoList]
    prevTodoList.push({ value: inputValue, done: false, id: uuidv4() })

    handleUpdateTodoList(prevTodoList)
    setInputValue('')
  }

  return (
    <div className='todos_content_first_main'>
      <div className='todos_content_first_main_input'>
        <Input
          style={{ color: theme === 'light' ? 'black' : 'white' }}
          className='todos_content_first_main_input_field'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className='todos_content_first_main_input_btn'>
          <div className='todos_content_first_main_input_btn_text' onClick={handleAdd}>
            ADD
          </div>
        </div>
      </div>
      <div className='todos_content_first_main_items'>
        <AnimatePresence>
          {todoList.map(({ value, done, id }: ITodo) => {
            return <TodosItem value={value} done={done} id={id} key={id} />
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Todo