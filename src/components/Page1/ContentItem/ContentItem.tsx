import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'
import { IContentItem } from '../../../Types/types'

const ContentItem = ({ text, imgWidth, imgHeight, textFirst, src }: IContentItem) => {
  const { theme } = useContext(ComboContext)

  return textFirst ? (
    <div className='main_content_item'>
      <div className='main_content_item_text'>
        <div className='main_content_item_text_content'>{text}</div>
      </div>
      <div className='main_content_item_img'>
        <img
          src={src.length > 1 ? (theme === 'light' ? src[0] : src[1]) : src[0]}
          alt='fireSpot'
          style={{ width: imgWidth, height: imgHeight }}
        />
      </div>
    </div>
  ) : (
    <div className='main_content_item'>
      <div className='main_content_item_img'>
        <img src={src[0]} alt='fireSpot' style={{ width: imgWidth, height: imgHeight }} />
      </div>
      <div className='main_content_item_text'>
        <div className='main_content_item_text_content'>{text}</div>
      </div>
    </div>
  )
}

export default ContentItem
