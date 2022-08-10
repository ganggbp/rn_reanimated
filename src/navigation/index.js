import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReanimatedBasic from '../screens/ReAnimatedBasic';
import PangestureBasic from '../screens/PangestureBasic';
import InterpolateWithScrollView from '../screens/InterpolateWithScrollView';
import InterpolateColor from '../screens/InterpolateColor';
import PinchGestureHandler from '../screens/PinchGestureHandler';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ReanimatedBasic" component={ReanimatedBasic} />
        <Stack.Screen name="PangestureBasic" component={PangestureBasic} />
        <Stack.Screen
          name="InterpolateWithScrollView"
          component={InterpolateWithScrollView}
        />
        <Stack.Screen name="InterpolateColor" component={InterpolateColor} />
        <Stack.Screen
          name="PinchGestureHandler"
          component={PinchGestureHandler}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
