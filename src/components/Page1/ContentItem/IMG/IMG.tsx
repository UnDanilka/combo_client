import React, { useContext } from 'react'
import ThemeContext from '../../../../Context/ThemeContext'
import { IIMG } from '../../../../Types/types'

const IMG = ({ imgWidth, imgHeight, src }: IIMG) => {
  const { theme } = useContext(ThemeContext)

  return (
    <img
      src={src.length > 1 ? (theme === 'light' ? src[0] : src[1]) : src[0]}
      alt='fireSpot'
      style={{ width: imgWidth, height: imgHeight }}
    />
  )
}

export default IMG
