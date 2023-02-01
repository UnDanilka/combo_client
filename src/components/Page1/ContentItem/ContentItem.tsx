import { IContentItem } from '../../../Types/types'
import { motion } from 'framer-motion'
import React from 'react'
import IMG from './IMG/IMG'

const ContentItem = ({ text, imgWidth, imgHeight, textFirst, src }: IContentItem) => {
  const MotionDiv = () => (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='main_content_item_img'
    >
      <IMG imgWidth={imgWidth} imgHeight={imgHeight} src={src} />
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

export default React.memo(ContentItem)
