import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RFPercentage} from 'react-native-responsive-fontsize'

const Input = ({label,iconName,error,password,confirmPassword,onFocus=()=>{}, ...props}) => {
  const [isFocused,setIsfocused]=React.useState(false)
  const [hidePassword,setHidePassword]=React.useState(password)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer,{borderColor: error ? 'red' : isFocused ? '#063970': 'grey'}]}> 
      <Icon style={styles.iconName} name={iconName}/>
      <TextInput
      secureTextEntry={hidePassword}
      onFocus={()=>{
        onFocus();
        setIsfocused(true)
      }}
        onBlur = {() =>{
          setIsfocused(false)
        }}
        
       style={styles.textInput}
      {...props} />

      {password && (
      <Icon 
      style={styles.iconName} 
      onPress={()=>{
        setHidePassword(!hidePassword)
      }}
      name={hidePassword? "eye-outline" : "eye-off-outline"}
      />
      )}
      {confirmPassword && (
      <Icon 
      style={styles.iconName} 
      onPress={()=>{
        setHidePassword(!hidePassword)
      }}
      name={hidePassword? "eye-outline" : "eye-off-outline"}
      />
      )}      
      </View>
      {error && (
      <Text 
      style={ styles.error}>
      {error}
      </Text>
      )} 
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      marginBottom:'4%'
    },
  
    label:{
        color:'#555555',
        marginVertical:'2%',
        fontSize:RFPercentage(2.5),
        fontWeight:"bold"
    },
    inputContainer:{
        backgroundColor:'#eaf1f7',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
    },
    iconName:{
      fontSize:RFPercentage(3.5),
      color:'#063970',
      marginHorizontal:'3%'
    },
    textInput:{
      flex:1,
    },
    error:{
      color:'#FF0000',
      marginTop:'2%',
      fontSize:RFPercentage(2.5)
    }

})

export default Input

