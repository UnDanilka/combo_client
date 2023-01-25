import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import ComboContext from '../../Context/ComboContext'
import { CloseOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const menuMotion = {
  initial: { x: '-100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { duration: 0.3 },
}
const layoutMotion = {
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

const closeIconStyle = {
  color: 'white',
  fontSize: '20px',
}

const Drawer = () => {
  const { isDrawer, handleUpdateIsDrawer, links } = useContext(ComboContext)

  return (
    <AnimatePresence>
      {isDrawer ? (
        <motion.div key='layout' {...layoutMotion} className='drawer'>
          <motion.div key='menu' {...menuMotion} className='drawer_menu'>
            <div className='drawer_menu_header'>
              <div className='drawer_menu_header_close' onClick={() => handleUpdateIsDrawer(false)}>
                <CloseOutlined style={closeIconStyle} />
              </div>
            </div>
            <div className='drawer_menu_content'>
              <div className='drawer_menu_content_list'>
                {links.map((link) => {
                  return (
                    <Link
                      className='drawer_menu_content_list_item'
                      to={link.link}
                      onClick={() => handleUpdateIsDrawer(false)}
                    >
                      {link.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
          <div className='drawer_space' onClick={() => handleUpdateIsDrawer(false)}></div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </AnimatePresence>
  )
}

export default Drawer
