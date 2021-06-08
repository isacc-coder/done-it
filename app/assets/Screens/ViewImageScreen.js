import React from 'react';
import {Image,StyleSheet,View} from 'react-native'
import colors from './config/colors'

function ViewImageScreen(props) {
    return( 
    
    <View style={styles.Container}>
       <View style={styles.closeIcons}></View>
       <View style={styles.deleteIcons}></View>
    <Image resizeMode="contain" style={styles.image} 
           source={require('../json.jpg')}/>
    </View>
    )
}
const styles = StyleSheet.create({
    closeIcons:{
     width:50,
     height:50,
     backgroundColor:colors.primary,
     position:"absolute",
     top:40,
     left:30
    },

    Container:{
     backgroundColor:colors.black,
     flex:1
    },
    deleteIcons:{
        width:50,
        height:50,
        backgroundColor:colors.secondary,
        position:"absolute",
        top:40,
        right:30
    },
    image:{
        width:"100%",
        height:"100%"
    }
})
export default ViewImageScreen;