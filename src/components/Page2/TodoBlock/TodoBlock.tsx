import circle from '../../../assets/circle.png'
import Todo from './Todo/Todo'

const TodoBlock = () => {
  return (
    <div className='block'>
      <div className='block_info'>
        <div className='block_info_text'>
          Let's test an ordinary todo list. There is nothing special, state management is in base react state.{' '}
        </div>
        <div className='block_info_img'>
          <img src={circle} alt='alt' className='block_info_img_content' />
        </div>
      </div>
      <Todo />
    </div>
  )
}

export default TodoBlock
