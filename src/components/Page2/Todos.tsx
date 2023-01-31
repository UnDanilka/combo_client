import TodoBlock from './TodoBlock/TodoBlock'
import circle from '../../assets/circle.png'
import { ITodoBlock } from '../../Types/types'
import Tabs from '../Tabs/Tabs'

const todoBlocksList: ITodoBlock[] = [
  {
    label: 'state',
    text: 'Lets test an ordinary todo list. There is nothing special, state management is in the base react state.',
    img: circle,
  },
  {
    label: 'server',
    text: 'This is todo list that works with server support. Server works with node js and hosted on the render platform',
    img: circle,
  },
  {
    label: 'blockchain',
    text: 'This todo list works on the blockchain. It contains gnosis chiado test net and needs metamask to be installed and connected. Also it needs to get configuration for the metamask for the chiado chain settings and to get some xDai for the gas paying. Everything you can do using links down below',
    img: circle,
  },
]

const tabsElements = todoBlocksList.map(({ text, img, label }, idx) => {
  return { element: <TodoBlock key={idx} text={text} img={img} label={label} />, label }
})

const Todos = () => {
  return (
    <div className='todos'>
      <Tabs elements={tabsElements} />
    </div>
  )
}

export default Todos
