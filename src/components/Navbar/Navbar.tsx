import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ComboContext from '../../Context/ComboContext'
import ThemeContext from '../../Context/ThemeContext'
import NavbarSmall from './NavbarSmall/NavbarSmall'
import Spinner from './Spinner/Spinner'
import Theme from './Theme/Theme'

const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  const { links } = useContext(ComboContext)
  const [size, setSize] = useState('big')

  useEffect(() => {
    const widthCondition = () => {
      if (window.innerWidth > 700) {
        setSize('big')
      } else {
        setSize('small')
      }
    }

    widthCondition()

    window.addEventListener('resize', widthCondition)

    return () => {
      window.removeEventListener('resize', widthCondition)
    }
  }, [])

  return (
    <>
      {size === 'big' ? (
        <div className='navbar'>
          <div className='navbar_items'>
            {links.map((link, idx) => {
              return (
                <div key={idx} className='navbar_items_item '>
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
          <Spinner />
          <div className='navbar_divider' />
        </div>
      ) : (
        <NavbarSmall />
      )}
    </>
  )
}

export default Navbar
