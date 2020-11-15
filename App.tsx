import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen/HomeScreen';
import OurSuccessRate from './components/OurSuccessRate/OurSuccessRate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Today Tips' }}
        />
        <Stack.Screen name="Our Success rate" component={OurSuccessRate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}