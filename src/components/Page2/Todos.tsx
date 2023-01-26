import TodoBlock from './TodoBlock/TodoBlock'
import circle from '../../assets/circle.png'
import { ITodoBlock } from '../../Types/types'
import Tabs from '../Tabs/Tabs'

const todoBlocksList: ITodoBlock[] = [
  {
    label: 'State',
    text: 'Lets test an ordinary todo list. There is nothing special, state management is in base react state.',
    img: circle,
  },
  {
    label: 'Server',
    text: 'Text about a server',
    img: circle,
  },
  {
    label: 'Blockchain',
    text: 'Text about a blockchain',
    img: circle,
  },
]

const tabsElements = todoBlocksList.map(({ text, img, label }) => {
  return { element: <TodoBlock text={text} img={img} label={label} />, label }
})

const Todos = () => {
  return (
    <div className='todos'>
      <Tabs elements={tabsElements} />
    </div>
  )
}

export default Todos
