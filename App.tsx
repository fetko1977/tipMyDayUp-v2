import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/containers/HomeScreen/HomeScreen';
import OurSuccessRate from './src/containers/OurSuccessRate/OurSuccessRate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home' :
                iconName = 'futbol'
                break;
              case 'Our Success Rate' :
                iconName = 'percent'
                break;
              default :
                iconName= ''
                break;

            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#333',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Today Tips' }}
        />
        <Tab.Screen name="Our Success Rate" component={OurSuccessRate} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}