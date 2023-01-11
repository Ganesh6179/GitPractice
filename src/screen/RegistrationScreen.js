import { View,StyleSheet,Text,ScrollView, TouchableOpacity} from "react-native";
import React from "react";
import {RFPercentage} from 'react-native-responsive-fontsize'
import Input from '../component/Input';
import ButtonComponent from '../component/ButtonComponent';

const RegistrationScreen = ({navigation}) => {
    const [inputs,setInputs]=React.useState({
        email:'',
        fullname:'',
        phone:'',
        password:'',
        confirmPassword:''
    })
    const [errors,setErrors]=React.useState({})


    const validate = () =>{
        // let textPattern = /^[A-Za-z\s\.]+$/
        // let numPattern=/^[0-9\b]+$/
        let valid = true;
        if(!inputs.email){
            handleError('Enter input email','email')
            valid = false;
        }else if(!inputs.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            handleError('Enter valid email','email')
            valid = false;
        }
        if(!inputs.fullname){
            handleError('Enter your name','fullname')
            valid = false
        }else if(inputs.fullname.length<3){
            handleError('Name must have atleast 3 characters','fullname')
            valid = false
        }else if((!inputs.fullname.match(/^[A-Za-z\s\.]+$/))){
            handleError('Name should be in alphabets','fullname')
            valid = false
        }
        if(!inputs.phone){
            handleError('Enter your phone number','phone')
            valid = false
        }else if((!inputs.phone.match(/^[0-9\b]+$/))){
            handleError('Phone number must have only numbers','phone')
            valid = false;
        }else if(inputs.phone.length===10){
            handleError('Name must have 10 digits','phone')
            valid = false
        }
        if(!inputs.password){
            handleError('Enter the password','password')
            valid = false;
        }else if(inputs.password.length<8){
            handleError('min password length is 8','password')
            valid = false;
        }else if(!inputs.password.match(/[A-Z]/)){
            handleError('password must have atleast one Uppercase','password')
            valid = false;
        }else if(!inputs.password.match(/[a-z]/)){
            handleError('password must have atleast one Lowercase','password')
            valid = false;
        }else if(!inputs.password.match(/[0-9]/)){
            handleError('password must have atleast one Number','password')
            valid = false;
        }else if(!inputs.password.match(/[-\#\$\.\%\&\@\*]/)){
            handleError('password must have atleast one Special character','password')
            valid = false;
        }
        if(inputs.confirmPassword!=inputs.password){
            handleError('password must be same','confirmPassword')
            valid = false;
        }
        if(valid){
            register();
        }
    }
    const register = () =>{
            navigation.navigate('User',{
                email:inputs.email,
                name:inputs.fullname,
                phone:inputs.phone,
            })
    }

    const handleOnChange =(text,input)=>{
        setInputs(prevState => ({...prevState,[input]:text}));
        };

    const handleError = (errorMessage,input)=>{
        setErrors(prevState=>({...prevState,[input]:errorMessage}))
    }

    return (
    <ScrollView >
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>Registration Form</Text>
        
        <View style={styles.inputContainer}>
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
            <Input 
            placeholder="Enter your Password Again" 
            iconName="lock-outline" 
            label = 'Confirm password'
            onChangeText={text=>handleOnChange(text,'confirmPassword')}
            error={errors.confirmPassword}
            onFocus={()=>{
                handleError(null,'password')
            }}
            confirmPassword
            />
             </View>
            <ButtonComponent title='Register' onPress={validate}/>
            <TouchableOpacity activeOpacity={0.7}
            onPress={()=> navigation.navigate("Login")}>
            <Text 
            style={styles.button2}>    
            Already have an account? Login
            </Text>
            </TouchableOpacity>
        </View>
         </ScrollView>
    );
}; 
const styles=StyleSheet.create({

    mainContainer:{
        marginVertical:'1%',
        marginHorizontal:'2%',
    },
    headingText:{
        color:'#063970',
        fontSize:RFPercentage(5),
        fontWeight:'bold',
        textAlign:'center'
    },

    inputContainer:{
        marginVertical:'2%',
        marginHorizontal:'2%',
    },
    button2:{
        color:'#370991',
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:'2%',
        fontSize:RFPercentage(3)
    }

})
export default RegistrationScreen;