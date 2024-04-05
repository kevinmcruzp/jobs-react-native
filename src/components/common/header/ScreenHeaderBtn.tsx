import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageProps } from 'react-native'

import styles from './screenheader.style'

interface ScreenHeaderBtnProps {
  iconUrl: ImageProps
  dimension: string
  handlePress?: () => void
}

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress }: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress} >
      <Image
        source={iconUrl}
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn