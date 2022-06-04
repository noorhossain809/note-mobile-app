import { View, Platform,SafeAreaView,StatusBar,Image,TextInput,StyleSheet,Pressable} from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import Text from '../../components/text/Text'
import { spacing } from '../../theme/spacing'
import Button from '../../components/Button'
import { NavigationContainer } from '@react-navigation/native'
import Input from '../../components/Input'

export default function SignIn({navigation}) {
  return (
    <SafeAreaView style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, backgroundColor: colors.white}}>
      <Image style={{alignSelf: 'center', }} source={require("../../../assets/images.png")} />
      <Text preset="h3" style={{color: colors.black, fontWeight: '700', textAlign: 'center', marginTop: spacing[8], marginBottom: spacing[5]}}>Never forget your notes</Text>
    <View style={{paddingHorizontal: spacing[6], paddingVertical: spacing[8]}}>
      <Input placeholder='Email Address' />
      <Input placeholder='Password' secureTextEntry />
      <Button title={"Login"} customStyles={{alignSelf: 'center', marginTop: spacing[8]}} />
    </View>
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: spacing[2]}}>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
         <Text preset="h4" style={{color: colors.black,}}>Don't have an account? <Text 
         style={{color: 'green', fontWeight: 'bold'}}
        >
           Sign Up</Text></Text>
      </Pressable>
    </View>
    </SafeAreaView>
  )
}
