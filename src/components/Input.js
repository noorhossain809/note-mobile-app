import { StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

export default function Input({placeholder, secureTextEntry, onChangeText}) {
  return (
    <TextInput placeholder={placeholder} secureTextEntry={secureTextEntry} onChangeText={onChangeText} style={styles.input} />
  )
}

const styles = StyleSheet.create({
    input:{
      height: 48,
      borderBottomWidth: 1,
      borderBottomColor: colors.grey,
      marginBottom: spacing[8]
    }
})