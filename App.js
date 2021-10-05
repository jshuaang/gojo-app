import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen'
import EatScreen from './src/screens/EatScreen'
import MenuScreen from './src/screens/MenuScreen'
import CartFood from './src/screens/CartFood'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import ResultScreen from './src/screens/ResultScreen';

const stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <stack.Screen name="HomeScreen" component={HomeScreen}/>
          <stack.Screen name="MapScreen" component={MapScreen}/>
          <stack.Screen name="EatScreen" component={EatScreen}/>
          <stack.Screen name="MenuScreen" component={MenuScreen}/>
          <stack.Screen name="CartFood" component={CartFood}/>
          <stack.Screen name="ResultScreen" component={ResultScreen}/>
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
