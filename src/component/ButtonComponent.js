import { StyleSheet, Text, View,Pressable, ScrollView } from 'react-native'
import React from 'react'
import {RFPercentage} from 'react-native-responsive-fontsize'

const ButtonComponent = ({title,onPress}) => {
  return (
    <ScrollView >
      <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
            </View>
         </ScrollView>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
  buttonContainer:{
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    height:'100%',
    width:'50%',
    backgroundColor:'#063970',
    justifyContent:"center",
    alignItems:'center',
    borderRadius:5,
    paddingVertical:'2%'
  },
  buttonText:{
    color:'#FFF',
    fontSize:RFPercentage(3),
    fontWeight:'bold',
    textAlign:'center'
  }

})