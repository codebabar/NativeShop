import { StyleSheet } from "react-native";

 

 export const HomeStyle1 = StyleSheet.create({
    miniHeader:{
       padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:5,
      },
      searchBox:{
        width:'88%',
        padding:5,
        backgroundColor:'#f1f2f4',
        flexDirection:'row',
        borderRadius:5,
      },
      scanIcon:{
        width:'10%',
        justifyContent:'center',
        alignItems:"center"
      },

      promoBanners:{
        height:170,
        width:300,
        margin:5,
      },
      promoBannerContent :{
         color:'#fff',
         paddingLeft:15,
      },

      promoBtn:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5,
        width: 100,
        backgroundColor:'#111',
        alignItems:'center'
      },
      dot:{
        height:15,
        width: 15,
        borderRadius:7.5,
        margin:5,
        borderColor:'#111',
        borderWidth:1,
        opacity:0.6

        
      },
  //  categoriesContainer

  categoriesContainer:{
    padding:10,
    marginTop:15,

  },
  category:{
    textAlign:'center',
    height:80,
    width: 80,
    borderRadius:45,
    justifyContent:'center',
    alignItems:'center'
  },
  single_category:{
    height:60,
    width: 60,
    borderRadius:35,
    borderWidth:1,
    borderColor:'#111',
    justifyContent:'center',
    alignItems:'center'

    
  },
  categoryimage:{
    height:60,
    width: 60,
    borderRadius:30
    
  }




 })