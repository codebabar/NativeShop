import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default  function Home1(){
    return(
         <View>
          <View><TextInput  placeholder='Search Items ...' /></View>
          <View><Ionicons name="line-scan" size={32} color="blue" /></View>
        </View>
 )
}