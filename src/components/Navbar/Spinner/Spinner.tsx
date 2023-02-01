import { SettingTwoTone } from '@ant-design/icons'
import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'

const Spinner = () => {
  const { isSpinner } = useContext(ComboContext)

  return (
    <div className='spinner'>
      <SettingTwoTone spin twoToneColor='#eb2f96' style={{ fontSize: '40px', display: isSpinner ? 'block' : 'none' }} />
    </div>
  )
}

export default Spinner
