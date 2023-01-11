import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import RegistrationScreen from './src/screen/RegistrationScreen';
import UserScreen from './src/screen/UserScreen';
import LoginScreen from './src/screen/LoginScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen name="Register" component={RegistrationScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
