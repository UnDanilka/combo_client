import notification from 'antd/es/notification'
import { NotificationType } from '../../Types/types'
import { CloseCircleFilled, CloseOutlined } from '@ant-design/icons'

const types = {
  error: 'Error',
  success: 'Success',
  info: 'Info',
  warning: 'Warning',
}

const closeIconStyle = {
  color: 'white',
}

const openNotification = (type: NotificationType, description: string) => {
  notification[type]({
    message: <div className='message'>{types[type]}</div>,
    description,
    className: 'notification',
    icon: <CloseCircleFilled />,
    closeIcon: <CloseOutlined style={closeIconStyle} />,
  })
}

export default openNotification
