import Switch from './Switch/Switch'
import { ReactComponent as Moon } from './moon.svg'
import { ReactComponent as Sun } from './sun.svg'
import { useCallback } from 'react'
import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'

const svgStyle = { width: '20px', marginRight: '5px' }

const Theme = () => {
  const { theme, handleUpdateTheme } = useContext(ComboContext)

  const handleThemeChange = useCallback(
    (e: boolean) => {
      if (e) {
        handleUpdateTheme('light')
      } else {
        handleUpdateTheme('dark')
      }
    },
    [handleUpdateTheme],
  )

  return (
    <div className='switch_wrapper'>
      {theme === 'light' ? (
        <div>
          <Sun style={svgStyle} />
        </div>
      ) : (
        <div>
          <Moon style={svgStyle} />
        </div>
      )}
      <Switch onChange={handleThemeChange} />
    </div>
  )
}

export default Theme
