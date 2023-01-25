import { useContext } from 'react'
import ComboContext from '../../Context/ComboContext'

const Drawer = () => {
  const { isDrawer } = useContext(ComboContext)

  return isDrawer ? <div className='drawer'></div> : <div></div>
}

export default Drawer
