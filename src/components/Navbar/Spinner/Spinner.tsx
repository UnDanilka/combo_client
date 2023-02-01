import { SettingTwoTone } from '@ant-design/icons'

const spinnerStyle = {
  fontSize: '30px',
}

const Spinner = () => {
  return (
    <div className='spinner'>
      <SettingTwoTone spin twoToneColor='#eb2f96' style={spinnerStyle} />
    </div>
  )
}

export default Spinner
