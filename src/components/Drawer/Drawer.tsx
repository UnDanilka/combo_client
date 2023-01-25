import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import ComboContext from '../../Context/ComboContext'

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

const Drawer = () => {
  const { isDrawer, handleUpdateIsDrawer } = useContext(ComboContext)

  return (
    <AnimatePresence>
      {isDrawer ? (
        <motion.div key='layout' {...layoutMotion} className='drawer'>
          <motion.div key='menu' {...menuMotion} className='drawer_menu'>
            <div className='drawer_menu_header'></div>
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
