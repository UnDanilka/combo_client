import TodoBlock from './TodoBlock/TodoBlock'
import circle from '../../assets/circle.png'
import { ITodoBlock } from '../../Types/types'

const todoBlocksList: ITodoBlock[] = [
  {
    text: 'Lets test an ordinary todo list. There is nothing special, state management is in base react state.',
    img: circle,
    todoType: 1,
  },
  {
    text: 'Lets test an ordinary todo list. There is nothing special, state management is in base react state.',
    img: circle,
    todoType: 2,
  },
]

const Todos = () => {
  return (
    <div className='todos'>
      <div className='todos_content'>
        {todoBlocksList.map(({ text, img, todoType }) => {
          return <TodoBlock text={text} img={img} todoType={todoType} />
        })}
      </div>
    </div>
  )
}

export default Todos
