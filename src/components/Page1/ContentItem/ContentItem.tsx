import { useContext } from 'react'
import ComboContext from '../../../Context/ComboContext'
import { IContentItem } from '../../../Types/types'
import { motion } from 'framer-motion'

const ContentItem = ({ text, imgWidth, imgHeight, textFirst, src }: IContentItem) => {
  const { theme } = useContext(ComboContext)

  const MotionDiv = () => (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='main_content_item_img'
    >
      <img
        src={src.length > 1 ? (theme === 'light' ? src[0] : src[1]) : src[0]}
        alt='fireSpot'
        style={{ width: imgWidth, height: imgHeight }}
      />
    </motion.div>
  )

  return textFirst ? (
    <div className='main_content_item'>
      <div className='main_content_item_text'>
        <div className='main_content_item_text_content'>{text}</div>
      </div>
      <MotionDiv />
    </div>
  ) : (
    <div className='main_content_item'>
      <MotionDiv />
      <div className='main_content_item_text'>
        <div className='main_content_item_text_content'>{text}</div>
      </div>
    </div>
  )
}

export default ContentItem
