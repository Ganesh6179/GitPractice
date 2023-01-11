// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from 'react-native';
import { SafeAreaView } from "react-navigation";
import { View,StyleSheet,Text,ScrollView, TouchableOpacity, Keyboard, Alert} from "react-native";
import React from "react";
import COLOR from '../../constant/const';
import Input from "../components/Input";

import COLORS from '../constant/const'

const RegistrationScreen = ({navigation}) => {
    const [inputs,setInputs]=React.useState({
        email:'',
        password:'',
        fullname:'',
        phone:''
    })
    const [errors,setErrors]=React.useState({})

    //valid = true/false ..if valif is false it cannot allow to submit

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
        if(!inputs.fullname){
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
    const register = () =>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
            try {
                AsyncStorage.setItem('user',JSON.stringify(inputs))
                navigation.navigate('Login')
            } catch (error) {
                Alert.alert('error','Something went wrong')
            }
        },3000)
    }
    // handleOnchange function is used to return the input value 
    const handleOnChange =(text,input)=>{
        setInputs(prevState => ({...prevState,[input]:text}));
        };

    // handleError function is used to reflect the error while clicking on register button 
    const handleError = (errorMessage,input)=>{
        setErrors(prevState=>({...prevState,[input]:errorMessage}))
    }

    return (

     <SafeAreaView style={{borderColor:COLORS.white,flex:1}}>
        <Loader visible={loading} />
        <ScrollView 
        contentContainerStyle={{paddingTop:10,paddingHorizontal:20}}>
        <Text style={{color:COLOR.black,fontSize:40,fontWeight:'bold'}}>Register</Text>
        <Text style={{color:COLOR.grey,fontSize:18,marginVertical:7}}>Enter you details to Register</Text>
        <View style={{marginVertical:20}}>
            <Input 
            placeholder="Enter your email address" 
            iconName="email-outline" 
            label = 'Email'
            onChangeText={text=>handleOnChange(text,'email')}
            error={errors.email}
            onFocus={()=>{
                handleError(null,'email')
            }}
            />
            <Input 
            placeholder="Enter your Fullname" 
            iconName="account-outline" 
            label = 'Fullname'
            onChangeText={text=>handleOnChange(text,'fullname')}
            error={errors.fullname}
            onFocus={()=>{
                handleError(null,'fullname')
            }}
            />
            <Input 
            placeholder="Enter your Phone Number" 
            iconName="phone-outline" 
            label = 'Phone Number'
            keyboardType='numeric'
            onChangeText={text=>handleOnChange(text,'phone')}
            error={errors.phone}
            onFocus={()=>{
                handleError(null,'phone')
            }}
            />
            <Input 
            placeholder="Enter your Password" 
            iconName="lock-outline" 
            label = 'Password'
            onChangeText={text=>handleOnChange(text,'password')}
            error={errors.password}
            onFocus={()=>{
                handleError(null,'password')
            }}
            password
            />
            <Button title='Register' onPress={validate}/>
            <TouchableOpacity activeOpacity={0.7}
            onPress={()=> navigation.navigate("Login")}>
            <Text 
            style={{
                color:COLOR.black,
                fontWeight:'bold',
                textAlign:'center',
                marginTop:20,
                fontSize:16
                }}>
            Already have an account? Login
            </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        
    </SafeAreaView>
    );
};
const styles=StyleSheet.create({

})
export default RegistrationScreen;