import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from '../Screens/Homes/Home1';
import Icon from 'react-native-vector-icons/Ionicons'; // Example: using Ionicons
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Shop = () => {
  return (
    <View>
      {/* Your Shop component content */}
    </View>
  );
}

const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home1}
        options={{
            headerShown:false,
          tabBarIcon: ({ color }) => (
            <Icon name='home' size={26} color={color} /> // Example: Home icon
          ),
          tabBarLabel: 'Home', // Optional: You can hide the label by removing this line
        }}
      />
      <Tab.Screen
        name='Shop'
        component={Shop}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='store' size={26} color={color} /> // Example: Shop icon
          ),
          tabBarLabel: 'Shop', // Optional: You can hide the label by removing this line
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNav;
