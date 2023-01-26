import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ITabs } from '../../Types/types'

const Tabs = ({ elements }: ITabs) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentTab, setCurrentTab] = useState<string>(location.pathname.split('/')[2] || 'state')

  useEffect(() => {
    navigate(currentTab)
  }, [currentTab, navigate])

  const handleUpdateCurrentTab = (label: string) => {
    setCurrentTab(label)
    navigate(currentTab)
  }

  return (
    <div className='tabs'>
      <div className='tabs_nav'>
        {elements.map(({ label }) => {
          return (
            <div className='tabs_nav_item' onClick={() => handleUpdateCurrentTab(label)}>
              {label}
            </div>
          )
        })}
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
