import Theme from '../Theme/Theme'
import { MenuOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'
import Spinner from '../Spinner/Spinner'

const NavbarSmall = () => {
  const { theme, handleUpdateIsDrawer } = useContext(ComboContext)

  const handleOpenDrawer = () => {
    handleUpdateIsDrawer(true)
  }

  return (
    <div className='navbar-small'>
      <div className='navbar-small_drawer'></div>
      <div className='navbar-small_burger'>
        <div
          className={`navbar-small_burger_btn ${theme === 'dark' && 'navbar-small_burger_btn-light'}`}
          onClick={handleOpenDrawer}
        >
          <MenuOutlined />
        </div>
      </div>
      <Theme />
      <Spinner />
      <div className='navbar-small_divider' />
    </div>
  )
}

export default NavbarSmall
