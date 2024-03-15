import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { HomeStyle1 } from '../../Themes/Styles/Homes/HomeStyle1';

export default function Home1() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={HomeStyle1.miniHeader}>
            <View style={[HomeStyle1.searchBox, { borderColor: isFocused ? 'red' : 'gray' }]}>
                <Feather name="search" size={24} color="black" />
                <TextInput
                    placeholder='Search Items ...'
                    placeholderTextColor='gray' // Set placeholder text color
                    style={{
                        paddingHorizontal: 10,
                        width: '100%',
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </View>
            <View style={HomeStyle1.scanIcon}>
                <MaterialCommunityIcons name="line-scan" size={24} color="black" />
            </View>
        </View>
    );
}
