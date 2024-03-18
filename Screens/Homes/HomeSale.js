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

  const RenderItem = ({ item }) => (
    <View style={HomeStyle1.itemContainer}>
      
         <View style={HomeStyle1.salebadge}><Text style={{fontSize:12,fontWeight:'bold'}}>40% OFF</Text></View>
      <Image source={item.pImage} style={HomeStyle1.itemImage} />
      <Text style={HomeStyle1.itemName}>{item.pname}</Text>
      <Text style={{marginBottom:15}}>⭐4.5(120)</Text>

      <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
          <Text style={HomeStyle1.itemPrice}>${item.pPrice}</Text>
          
          <Pressable><Text style={{backgroundColor:'green',color:"#fff",padding:5}}>add to cart</Text></Pressable>

      </View>
    </View>
  );

  return (
    <>
      <View style={HomeStyle1.saleMiniHeader}>
        <View>
          <Text style={HomeStyle1.mdHeading}>Fla🔥h  <Text style={{fontSize:14}}>Sale</Text></Text>
        </View>
        <View>
          <Pressable>
            <Text style={HomeStyle1.minHeading}>View All</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView horizontal={true}  showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false}>
        <FlatList  horizontal={true} data={data} renderItem={RenderItem} keyExtractor={(item) => item.id.toString()} />
      </ScrollView>
    </>
  );
}
