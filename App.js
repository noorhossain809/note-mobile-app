import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import Create from './src/screence/user/Create';
import Home from './src/screence/user/Home';
import Edit from './src/screence/user/Edit';
import SignIn from './src/screence/Auth/SignIn';
import SignUp from './src/screence/Auth/SignUp';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDkE2ZPbyUJYJ5m3h9ArV2HcOh5zrhpOYE",
  authDomain: "note-app-80ef1.firebaseapp.com",
  projectId: "note-app-80ef1",
  storageBucket: "note-app-80ef1.appspot.com",
  messagingSenderId: "890174345959",
  appId: "1:890174345959:web:c2b4db35f9fc2fa52d8842"
};

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  const [FontLoaded] = useFonts({
    'Spartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'Spartan-Bold': require('./assets/fonts/LeagueSpartan-VariableFont_wght.ttf'),
  });
  
  if (!FontLoaded) {
    return null;
  }
  
  const user = false;

  const AppTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
         backgroundColor: '#fff'
    }
  }
  return (
   <>
 
    <NavigationContainer theme={DarkTheme}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    {
     user ? (
       <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Edit" component={Edit} />
      </>
     ) : (
      <>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      </>
     )
   }
      
    </Stack.Navigator>
  </NavigationContainer>
         <StatusBar style='light' />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
