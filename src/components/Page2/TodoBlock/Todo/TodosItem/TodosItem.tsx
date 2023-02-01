import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { ITodoItem } from '../../../../../Types/types'

const iconStyle = { color: 'white', fontSize: '30px' }
const motionRules = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { duration: 0.5 },
}

const TodosItem = ({ value, done, id, handleSetDone, handleRemove }: ITodoItem) => {
  return (
    <motion.div data-testid='todo_item' {...motionRules} layout className='item'>
      <div className={`item_title ${done && 'item_completed'}`}>
        <div className={`item_title_text ${done && 'done'}`}>{value}</div>
      </div>
      <div onClick={() => handleRemove(id)} className='item_delete'>
        <CloseOutlined style={iconStyle} />
      </div>
      <div onClick={() => handleSetDone(id)} className='item_done'>
        <CheckOutlined style={iconStyle} />
      </div>
    </motion.div>
  )
}

export default TodosItem
