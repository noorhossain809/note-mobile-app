import { View, StyleSheet, Text as RNText } from 'react-native'
import React from 'react'
import { presets } from './preset.text'

export default function Text({children, preset= 'default', style}) {
    const textStyle = StyleSheet.compose(presets[preset], style)
  return (
    
      <RNText style={textStyle}>
          {children}
      </RNText>
  
  )
}