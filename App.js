import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ViewImageScreen from './app/assets/Screens/ViewImageScreen';
//import { StyleSheet, Text, View,Image,TouchableOpacity,Button ,Alert,SafeAreaView,} from 'react-native';
//import WelcomeScreen from './app/assets/Screens/WelcomeScreen'
//import ViewImageScreen from './app/assets/Screens/ViewImageScreen'
export default function App() {
  
 
  return (
    //<WelcomeScreen/>

   <ViewImageScreen/>
  )
   
    
}
    // <SafeAreaView style={[styles.container,containerStyle]}>
    //   <Text  o>ReactNative App</Text>
    //    <TouchableOpacity onPress={()=>console.log("image tapped")}>
    //     <Image source={{
    //     width:200,
    //     height:300,
    //     uri:"https://picsum.photos/200/300"}}/>

    //    </TouchableOpacity>
    //   <Button title="Click Me" color="red" onPress={()=>alert("Button Tapped")}/>
    //   {/* <Button title="Click Me" color="red" onPress={()=>Alert.prompt("My title","My message",(text) =>console.log(text))}/> */}
    //   <Button title="Click Me"  onPress={()=>Alert.alert("My title","My message",[
    //      {text:"Yes",onPress:()=>console.log('Yes')}
    //     ,{text:"No",onPress:()=>console.log('No')}
    //     ])}/>
    //   <StatusBar style="auto" />
    //   {/* <View
    //     style={
    //       {
    //         backgroundColor:"tomato",
    //         flex:1
    //       }
    //     }>
    //   </View> */}
    // </SafeAreaView>
    

// const containerStyle={backgroundColor:"orange"}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems:'center'
  
//   },
// });
