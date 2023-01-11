import { StyleSheet, Text, View ,ScrollView,TextInput,Pressable,Keyboard} from 'react-native'
import React,{useState} from 'react'
import Input from '../component/Input'



const Form = () => {
    let [inputs,setInputs]=React.useState({
        name:'',
        phone:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors,setErrors]=useState('')

    const validate = () =>{
        Keyboard.dismiss()
        let valid = true;
        if(!inputs.email){
            handleError('Enter input email','email')
            valid = false;
        }else if(!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            handleError('Enter valid email','email')
            valid = false;
        }
        if(!inputs.password){
            handleError('Enter the password','password')
            valid = false;
        }else if(inputs.password.length<5){
            handleError('min password length is 5','password')
            valid = false;

        }
        if(!inputs.name){
            handleError('Enter your name','fullname')
            valid = false
        }
        if(!inputs.phone){
            handleError('Enter your phone number','phone')
            valid = false
        }
        if(valid){
            register();
        }
    }

    const handleOnChange =(text,input)=>{
        setInputs(prevState => ({...prevState,[input]:text}));
        };

    const handleError = (errorMessage,input)=>{
        setErrors(prevState=>({...prevState,[input]:errorMessage}))
        }

    
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>REGISTRATION FORM 2</Text>
            <Input
            label="Name"
            placeholder="Enter your name"
            autoCapitalize='none'
            autoCorrect={false} 
            onChangeText={text=>handleOnChange(text,'name')} 
            // value={name}
            />
            {errors&& <Text>{errors}</Text>}
            <Input 
            label ='Phone Number' 
            placeholder='Enter your phone number'
            autoCorrect={false}
            keyboardType='numeric'
            // value={phone}
            onChangeText={text=>handleOnChange(text,'phone')}
            />
            <Input 
            label ='Email' 
            placeholder='Enter your email'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            // value={email}
            onChangeText={text=>handleOnChange(text,'email')}
            />
            <Input 
            label ='Password' 
            placeholder='Enter your password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            // value={password}
            onChangeText={text=>handleOnChange(text,'password')}
            />
            <Input 
            label ='Confirm Password' 
            placeholder='Enter your password again'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry
            // value={confirmPassword}
            onChangeText={text=>handleOnChange(text,'confirmPassword')}
            />

           
            <Pressable
            onPress={validate}
                    style={({ pressed }) => [
                        {
                          opacity: pressed
                            ? 0.8
                            : 1,
                          backgroundColor: pressed
                          ? 'grey'
                          : 'blue'
                        },
                        styles.button,
                      ]}>
            {({ pressed }) => (
              <Text style={styles.buttontext}>
                {pressed ? 'Registered!' : 'Register'}
              </Text>
               )}
            </Pressable>
          </ScrollView>
      )
            }
    
    export default Form
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            marginHorizontal:10,
            marginBottom:10
        },
        heading:{
            fontSize:22,
            fontWeight:'bold',
            color:'green',
            textAlign:'center',
            marginBottom:10
        },
        label:{
            fontSize:18,
            fontWeight:'bold',
        },
        input:{
            borderWidth:0.5,
            marginVertical:10,
            borderRadius:3
        },
        button:{
            height:40,
            justifyContent:'center',
            alignItems:'center',
            marginTop:10
    
        },
        buttontext:{
            color:'white'
        },
        error:{
            fontWeight:'bold',
            color:'red'
        }
    })