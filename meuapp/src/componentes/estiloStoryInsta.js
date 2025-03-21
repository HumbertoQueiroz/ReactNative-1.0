import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { stylesMain } from "../../App";


const {height} = Dimensions.get('window')


class AppStorysInstagram extends Component {
  render() {
    return (
      <View style={{backgroundColor: "#f1f1f1f1", paddingTop: "13%", height:height}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={stylesMain.box1}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box2}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box3}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box4}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box2}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box3}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box4}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box2}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box3}>
            <Text>teste</Text>
          </View>
          <View style={stylesMain.box4}>
            <Text>teste</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
 export default AppStorysInstagram;