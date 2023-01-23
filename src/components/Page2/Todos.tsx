import circle from '../../assets/circle.png'
import Todo from './Todo/Todo'

const Todos = () => {
  return (
    <div className='todos'>
      <div className='todos_content'>
        <div className='todos_content_first'>
          <div className='todos_content_first_info'>
            <div className='todos_content_first_info_text'>
              Let's test an ordinary todo list. There is nothing special, state management is in base react state.{' '}
            </div>
            <div className='todos_content_first_info_img'>
              <img src={circle} alt='alt' className='todos_content_first_info_img_content' />
            </div>
          </div>
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default Todos
