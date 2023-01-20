import React from 'react'
import { ISkillsItem } from '../../../Types/types'

const SkillsItem = ({ data, title }: ISkillsItem) => {
  return (
    <div className='main_content_item_skills_items'>
      <div className='main_content_item_skills_items_title'>{title}</div>
      {data.map((item: string, i: number) => {
        return (
          <div key={i} className='main_content_item_skills_items_item'>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default SkillsItem
