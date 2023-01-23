import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ComboContext from '../../Context/ComboContext'
import Theme from './Theme/Theme'

const Navbar = () => {
  const { theme } = useContext(ComboContext)

  return (
    <div className='navbar'>
      <div className='navbar_items'>
        <div className='navbar_items_item '>
          <Link className={`navbar_items_item_link ${theme === 'light' ? 'navbar_light' : 'navbar_dark'}`} to='/'>
            Main
          </Link>
        </div>
        <div className='navbar_items_item'>
          <Link className={`navbar_items_item_link ${theme === 'light' ? 'navbar_light' : 'navbar_dark'}`} to='/todos'>
            Todos
          </Link>
        </div>
        <div className='navbar_items_item'>
          <Link
            className={`navbar_items_item_link ${theme === 'light' ? 'navbar_light' : 'navbar_dark'}`}
            to='/contacts'
          >
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
