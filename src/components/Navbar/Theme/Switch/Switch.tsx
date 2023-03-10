import { useEffect, useState } from 'react'
import { ISwitch } from '../../../../Types/types'

const Switch = (props: ISwitch) => {
  const [on, setOn] = useState(true)

  const { onChange } = props

  useEffect(() => {
    onChange(on)
  }, [on, onChange])

  return (
    <div className='switch' style={on ? { backgroundColor: '#4a71b1' } : {}} onClick={() => setOn(!on)}>
      <div className='switch_ball' style={on ? { transform: 'translateX(19px)' } : {}} />
    </div>
  )
}

export default Switch
