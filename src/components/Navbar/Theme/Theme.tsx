import Switch from './Switch/Switch'
import './Theme.css'
import { ReactComponent as Moon } from './moon.svg'
import { ReactComponent as Sun } from './sun.svg'
// import { Istore } from "../../types";
import { useCallback } from 'react'

const Theme = () => {
  const handleThemeChange = useCallback((e: boolean) => {
    if (e) {
      console.log(e)
    } else {
      console.log(e)
    }
  }, [])

  return (
    <div className='switch_wrapper'>
      {theme === 'light' ? (
        <div>
          <Sun style={{ width: '20px', marginRight: '5px' }} />
        </div>
      ) : (
        <div>
          <Moon style={{ width: '20px', marginRight: '5px' }} />
        </div>
      )}
      <Switch onChange={handleThemeChange} />
    </div>
  )
}

export default Theme
