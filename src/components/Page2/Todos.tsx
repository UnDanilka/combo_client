import { Input } from 'antd'
import { useContext } from 'react'
import circle from '../../assets/circle.png'
import ComboContext from '../../Context/ComboContext'

const Todos = () => {
  const { theme } = useContext(ComboContext)

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
          <div className='todos_content_first_main'>
            <div className='todos_content_first_main_input'>
              <Input
                style={{ color: theme === 'light' ? 'black' : 'white' }}
                className='todos_content_first_main_input_field'
              />
              <div className='todos_content_first_main_input_btn'>
                <div className='todos_content_first_main_input_btn_text'>ADD</div>
              </div>
            </div>
            <div className='todos_content_first_main_items'>
              <div className='todos_content_first_main_items_item'>
                <div className='todos_content_first_main_items_item_title'>
                  <div className='todos_content_first_main_items_item_title_text'>bla</div>
                </div>
                <div className='todos_content_first_main_items_item_delete'>delete</div>
                <div className='todos_content_first_main_items_item_done'>done</div>
              </div>
              <div className='todos_content_first_main_items_item'>2</div>
              <div className='todos_content_first_main_items_item'>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todos
