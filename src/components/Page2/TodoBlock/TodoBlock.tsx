import { ITodoBlock } from '../../../Types/types'
import Todo from './Todo/Todo'

const TodoBlock = ({ text, img, label }: ITodoBlock) => {
  return (
    <div className='block'>
      <div className='block_info'>
        <div className='block_info_text'>{text}</div>
        <div className='block_info_img'>
          <img src={img} alt='alt' className='block_info_img_content' />
        </div>
      </div>
      <Todo />
    </div>
  )
}

export default TodoBlock
