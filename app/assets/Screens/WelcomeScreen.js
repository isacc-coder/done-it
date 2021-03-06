import React from 'react';
import { ImageBackground,StyleSheet, View,Image,Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require("../background.jpg")}>
         <View style={styles.logoContainer}>
           <Image style={styles.logo} source={require('../LogoMakr-8dmOsE.png')}/>
           <Text>Lets Talk about Robots!</Text>
         </View>
        
            <View style={styles.loginButton}></View>
            <View style={styles.RegisterButton}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
 background:{
     flex:1,
     justifyContent:"flex-end",
     alignItems:"center"
 },
 loginButton:{
  width:"100%",
  height:70,
  backgroundColor:"#fc5c65"
 },
 logoContainer:{
     position:"absolute",
     top:20
    
 },
 logo:{
     width:100,
     height:100,
     
 },
 RegisterButton:{
    width:"100%",
    height:70,
    backgroundColor:"#4ecdc4"
   }
})
export default WelcomeScreen;