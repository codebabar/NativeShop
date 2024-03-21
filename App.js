import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Home1 from "./Screens/Homes/Home1";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./Navbars/BottomNav";



export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <SafeAreaView style={styles.container}>
           <BottomNav />
      </SafeAreaView>
      </NavigationContainer>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
  }


});
