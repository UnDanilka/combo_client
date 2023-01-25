import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ComboContext from '../../Context/ComboContext'
import NavbarSmall from './NavbarSmall/NavbarSmall'
import Theme from './Theme/Theme'

const Navbar = () => {
  const { theme, links } = useContext(ComboContext)

  return (
    <>
      <div className='navbar'>
        <div className='navbar_items'>
          {links.map((link) => {
            return (
              <div className='navbar_items_item '>
                <Link
                  className={`navbar_items_item_link ${theme === 'light' ? 'navbar_light' : 'navbar_dark'}`}
                  to={link.link}
                >
                  {link.title}
                </Link>
              </div>
            )
          })}
        </div>
        <Theme />
        <div className='navbar_divider' />
      </div>
      <NavbarSmall />
    </>
  )
}

export default Navbar
