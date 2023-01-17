import { Link } from 'react-router-dom'
import Theme from './Theme/Theme'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_items'>
        <div className='navbar_items_item '>
          <Link className='navbar_items_item_link navbar_items_item_link_main ' to='/'>
            Main
          </Link>
        </div>
        <div className='navbar_items_item'>
          <Link className='navbar_items_item_link' to='/todos'>
            Todos
          </Link>
        </div>
        <div className='navbar_items_item'>
          <Link className='navbar_items_item_link' to='/contacts'>
            Contacts
          </Link>
        </div>
      </div>
      <Theme />
      <div className='navbar_divider' />
    </div>
  )
}

export default Navbar
