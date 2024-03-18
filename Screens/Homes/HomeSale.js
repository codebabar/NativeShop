import React from 'react';
import { FlatList, Pressable, View, Text, Image ,ScrollView} from 'react-native';
import { HomeStyle1 } from '../../Themes/Styles/Homes/HomeStyle1';
import { MaterialCommunityIcons, AntDesign  } from '@expo/vector-icons';

export default function HomeSale() {
  const data = [
    {
      id: 1,
      pname: 'Hand Watch',
      pImage: require('../../assets/Images/Products/watch1.png'), // You need to provide the actual path to the image here
      pPrice: 25,
      specification: [{ color: 'green', size: 'large', company: 'Best' }],
    },
    {
        id: 2,
        pname: 'Classic Watch',
        pImage: require('../../assets/Images/Products/watch2.png'), // You need to provide the actual path to the image here
        pPrice: 25,
        specification: [{ color: 'green', size: 'large', company: 'Best' }],
      },
      {
        id: 3,
        pname: 'Classic Watch',
        pImage: require('../../assets/Images/Products/watch2.png'), // You need to provide the actual path to the image here
        pPrice: 25,
        specification: [{ color: 'green', size: 'large', company: 'Best' }],
      },
      {
        id: 4,
        pname: 'Classic Watch',
        pImage: require('../../assets/Images/Products/watch2.png'), // You need to provide the actual path to the image here
        pPrice: 25,
        specification: [{ color: 'green', size: 'large', company: 'Best' }],
      },
    // Add more data items as needed
  ];

  const renderItem = ({ item }) => (
    <View style={HomeStyle1.itemContainer}>
         <View style={HomeStyle1.salebadge}><Text>Sale 40% OFFF</Text></View>
      <Image source={item.pImage} style={HomeStyle1.itemImage} />
      <Text style={HomeStyle1.itemName}>{item.pname}</Text>
      <View style={{flexDirection:'row',justifyContent:"space-between"}}>
          <View> <Text style={HomeStyle1.itemPrice}>${item.pPrice}</Text></View>
          <View><Pressable>
          <AntDesign name="plussquareo" size={24} color="black" />
            </Pressable></View>
      </View>
    </View>
  );

  return (
    <>
      <View style={HomeStyle1.saleMiniHeader}>
        <View>
          <Text style={HomeStyle1.mdHeading}>Fla🔥hSale</Text>
        </View>
        <View>
          <Pressable>
            <Text style={HomeStyle1.minHeading}>View All</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView horizontal={true}  showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false}>
        <FlatList  horizontal={true} data={data} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      </ScrollView>
    </>
  );
}
