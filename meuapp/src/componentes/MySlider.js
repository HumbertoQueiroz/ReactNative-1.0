import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from  "@react-native-community/slider"


export default class MySlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor:50
    }
  }


  render() {
    
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={(valorSelecionado)=>{ this.setState({valor:valorSelecionado})}}
          minimumTrackTintColor="#00FF00"
          value={this.state.valor}
          style={{marginHorizontal:20}}
        />
       <Text style={{textAlign:'center', marginTop:20}}>{this.state.valor.toFixed(0)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
    backgroundColor:'#fff',
    padding:20,
    justifyContent:'center'
  }
})