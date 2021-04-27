import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Main from './screens/Main/Main';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{
          headerTitle: 'Inicio de sesion',
          headerTintColor: 'blue'
        }} name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Main" component={Main}/>    
      </Stack.Navigator>    
    </NavigationContainer>
  );
}


