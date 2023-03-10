import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ITabs } from '../../Types/types'

const Tabs = ({ elements }: ITabs) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentTab, setCurrentTab] = useState<string>(location.pathname.split('/')[2] || 'state')
  const [activeCoords, setActiveCoords] = useState({ left: 0, width: 55 })

  useEffect(() => {
    navigate(currentTab)
  }, [currentTab, navigate])

  const handleUpdateCurrentTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, label: string) => {
    const elem = e.target as HTMLElement
    setActiveCoords({ left: elem.offsetLeft, width: elem.offsetWidth })
    setCurrentTab(label)
    navigate(currentTab)
  }

  useEffect(() => {
    const elem = document.querySelector(`#${location.pathname.split('/')[2] || 'state'}`) as HTMLElement
    if (elem) {
      setActiveCoords({ left: elem.offsetLeft, width: elem.offsetWidth })
    }
  }, [location.pathname])

  return (
    <div className='tabs'>
      <div className='tabs_nav'>
        {elements.map(({ label }, key) => {
          return (
            <div key={key} id={label} className='tabs_nav_item' onClick={(e) => handleUpdateCurrentTab(e, label)}>
              {label}
            </div>
          )
        })}
        <div className='tabs_nav_active' style={{ left: activeCoords.left, width: activeCoords.width }} />
      </div>
      <div className='tabs_content'>
        {elements.map(({ element, label }) => {
          return currentTab === label && element
        })}
      </div>
    </div>
  )
}

export default Tabs
