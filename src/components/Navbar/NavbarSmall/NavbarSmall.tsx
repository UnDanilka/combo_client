import Theme from '../Theme/Theme'
import { MenuOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'

const NavbarSmall = () => {
  const { theme } = useContext(ComboContext)

  return (
    <div className='navbar-small'>
      <div className='navbar-small_burger'>
        <div className={`navbar-small_burger_btn ${theme === 'dark' && 'navbar-small_burger_btn-light'}`}>
          <MenuOutlined />
        </div>
      </div>
      <Theme />
      <div className='navbar-small_divider' />
    </div>
  )
}

export default NavbarSmall
