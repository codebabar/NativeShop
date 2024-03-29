import React, { useState, useRef, useEffect } from 'react';
import { TextInput, View, Text,Image, ScrollView, ImageBackground, Pressable, StyleSheet,FlatList } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { HomeStyle1 } from '../../Themes/Styles/Homes/HomeStyle1';
import HomeSale from './HomeSale';
import { Them1Colors } from '../../Themes/Colors/Colors1';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home1() {
    
    const [isFocused, setIsFocused] = useState(false);

    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
        <View>
            <View style={HomeStyle1.miniHeader}>
                <View style={HomeStyle1.searchBox}>
                   
                    <TextInput
                        placeholder='Search Items ...'
                        placeholderTextColor='gray'
                        style={{
                            borderWidth: 0,
                            borderColor: 1,
                            width: '100%',
                            marginLeft: 10,
                        }}
                    />
                </View>
                <View style={HomeStyle1.scanIcon}>
                <FontAwesome5 name='qrcode' size={24} color='black' />
                </View>
            </View>

            <HeaderPromotionalBanners />
           
        
            {/* HomeSale */}
            <HomeSale />
            
        </View>
    </ScrollView>   
    );
}

const promoBaner = [
    {
        id: 1,
        image: require('../../assets/promoImages/1.png'),
        minText: [{ text: 'Causal Shoes', color: '#111' }],
        saleText: [{ disc: '40%', tColor: '#111' }],
        btn: [{ text: 'Show Now', tColor: '#fff', bgColor: '#111', link: '' }],
    },
    {
        id: 2,
        image: require('../../assets/promoImages/2.png'),
        minText: [{ text: 'Causal Shoes', color: '#fff' }],
        saleText: [{ disc: '40%', tColor: '#fff' }],
        btn: [{ text: 'Show Now', tColor: '#111', bgColor: '#fff', link: '' }],
    },
    {
        id: 3,
        image: require('../../assets/promoImages/2.png'),
        minText: [{ text: 'Causal Shoes', color: '#fff' }],
        saleText: [{ disc: '40%', tColor: '#fff' }],
        btn: [{ text: 'Show Now', tColor: '#111', bgColor: '#fff', link: '' }],
    }
];

const HeaderPromotionalBanners = () => {
    const [activeBanner, setActiveBanner] = useState(1);
    const scrollViewRef = useRef(null);
    const scrollViewWidth = promoBaner.length * 100; // Assuming each banner takes 100% width

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextBanner = activeBanner % promoBaner.length + 1;
            scrollToBanner(nextBanner);
        }, 3000); // Change interval time as needed

        return () => clearInterval(intervalId);
    }, [activeBanner]);

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffsetX / scrollViewWidth);
        setActiveBanner(index + 1);
    };

    const scrollToBanner = (index) => {
        setActiveBanner(index);
        const offsetX = (index - 1) * scrollViewWidth;
        scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
    };

    return (
        <View>
            <ScrollView
                ref={scrollViewRef}
                style={{ padding: 5 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {promoBaner.map((item) => (
                    <View style={HomeStyle1.promoBanners} key={item.id}>
                        <ImageBackground source={item.image} style={styles.imageBackground}>
                            <View style={HomeStyle1.promoBannerContent}>
                                {item.minText.map((text, index) => (
                                    <Text key={index} style={{ color: text.color, fontSize: 18 }}>
                                        {text.text}
                                    </Text>
                                ))}
                                {item.saleText.map((sale, index) => (
                                    <Text key={index} style={{ fontSize: 32, fontWeight: 'bold', color: sale.tColor }}>
                                        {sale.disc}<Text style={{ fontSize: 12, marginLeft: 5 }}> OFF</Text>
                                    </Text>
                                ))}
                                {item.btn && item.btn.map((button, index) => (
                                    <Pressable
                                        key={index}
                                        style={[
                                            HomeStyle1.promoBtn,
                                            { color: button.tColor, backgroundColor: button.bgColor }
                                        ]}
                                    >
                                        <Text style={{ color: button.tColor }}>{button.text}</Text>
                                    </Pressable>
                                ))}
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </ScrollView>
            <Dots onPress={scrollToBanner} activeBanner={activeBanner} />
            <Categories />
        </View>
    );
};

const Dots = ({ onPress, activeBanner }) => {
    const handlePress = (id) => {
        onPress(id);
    };

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {promoBaner.map((item) => (
                <Pressable key={item.id} onPress={() => handlePress(item.id)}>
                    <View style={[HomeStyle1.dot, activeBanner === item.id ? styles.activeDot : null]} />
                </Pressable>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    activeDot: {
        backgroundColor: Them1Colors.primaryColor, // Change this to your desired active dot color
    },
});


// Show Categories 


const Categories = () => {
    const data = [
        
        { id: 1, name: 'Sneakers',image:require('../../assets/promoImages/1.png')},
        { id: 2, name: 'Sandals' ,image:require('../../assets/promoImages/2.png') },
        { id: 3, name: 'Boots', image:require('../../assets/promoImages/1.png') },
        // Add more categories as needed
    ];

    const renderItem = ({ item }) => {
        return (
            <View  style={HomeStyle1.category}>
                    <View  style={HomeStyle1.single_category}>
                        <Image  style={HomeStyle1.categoryimage} source={item.image} />       
                     </View>
                    <Text style={{fontSize:12}}>{item.name}</Text>
            </View>
           
        );
    };

    return (
        <View style={HomeStyle1.categoriesContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

