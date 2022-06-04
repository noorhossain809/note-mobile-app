import { View, Platform,SafeAreaView,StatusBar,StyleSheet,Pressable} from 'react-native'
import {useState} from 'react'
import { colors } from '../../theme/colors'
import Text from '../../components/text/Text'
import { spacing } from '../../theme/spacing'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const genderOptions =["Male", "Female"]

const auth = getAuth();

export default function SignUp({navigation}) {
const [gender, setGender] = useState(false)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [name, setName] = useState("")
const [age, setAge] = useState("")
  

const onSignUp = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('users', user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

  
  return (
    <SafeAreaView style={{marginTop: Platform.OS === "android"? StatusBar.currentHeight:0, flex: 1, backgroundColor: colors.white}}>
     <View style={{paddingHorizontal: spacing[6], paddingVertical: spacing[8], marginTop: spacing[5]}}>
      <Input name='email' placeholder='Email Address' onChangeText={(text) => setEmail(text)} />
      <Input name='password' placeholder='Password' secureTextEntry onChangeText={(text) => setPassword(text)} />
      <Input name='name' placeholder='Full name' onChangeText={(text) => setName(text)} />
      <Input name='age' placeholder='Age' onChangeText={(text) => setAge(text)} />
      <View style={{marginVertical: spacing[5]}}>
        <Text preset="h4" style={{color: colors.black, fontWeight: 'bold'}}>Selected Gender</Text>
      </View>
      {genderOptions.map((option) => {
        const selected = option === gender;
                return (
                  <Pressable style={styles.radioButton}
                  key={option}
                onPress={() => setGender(option)}
                >
                <View style={[styles.outerCircle, selected && styles.selectedOuter]}>
                  <View style={[styles.innerCircle, selected && styles.selectedInner]}>
        
                  </View>
                </View>
                <Text preset="h5" style={{color: colors.black, left: spacing[2]}}>{option}</Text>
              </Pressable>
                )
      })}
       <Button title={"Login"} onPress={onSignUp} customStyles={{alignSelf: 'center', marginTop: spacing[8],}} />
     
    </View>
   
    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: spacing[2]}}>
      <Pressable onPress={() => navigation.navigate('SignIn')}>
         <Text preset="h4" style={{color: colors.black,}}>Already have an account <Text style={{color: 'green', fontWeight: 'bold'}}>Sign In</Text></Text>
      </Pressable>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  radioButton:{
    flexDirection: "row", 
    alignItems: 'center', 
    marginBottom: spacing[5],
    
  },
 
  outerCircle:{
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.grey,
    justifyContent: 'center', 
    alignItems: 'center'

  },
  selectedOuter:{
    borderColor: 'orange'
  },
  innerCircle:{
    width: 15,
    height: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  selectedInner:{
    backgroundColor: 'orange',
    borderColor: 'orange'
  }
})