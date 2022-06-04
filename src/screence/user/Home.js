import { View,SafeAreaView, Platform,StatusBar} from 'react-native'
import React from 'react'
import Text from '../../components/text/Text'
import { colors } from '../../theme/colors'

export default function Home() {
  return (
    <SafeAreaView style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, }}>
      <Text preset="h1">Home</Text>
    </SafeAreaView>
  )
}