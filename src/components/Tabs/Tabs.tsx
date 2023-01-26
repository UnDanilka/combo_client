import { useState } from 'react'
import { ITabs } from '../../Types/types'

const Tabs = ({ elements }: ITabs) => {
  const [currentTab, setCurrentTab] = useState('Server')

  return (
    <div className='tabs'>
      <div className='tabs_nav'></div>
      <div className='tabs_content'>
        {elements.map(({ element, label }) => {
          return currentTab === label && element
        })}
      </div>
    </div>
  )
}

export default Tabs
