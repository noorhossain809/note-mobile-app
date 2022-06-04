import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Text from './text/Text'
import { colors } from '../theme/colors'


export default function Button({title, onPress, customStyles}) {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
           <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 30,
        width: 165,
        height: 45,
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center'

    },
    title:{
        fontSize: 18,
        color: colors.black
    }

})