import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";



export default class MySwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status:false
    }
  }


  render() {
    
    return (
      <View style={styles.container}>
        <Switch 
          value={this.state.status}
          onValueChange={(valorSelecionado) => { this.setState({ status: valorSelecionado}) }}
        />
        <Text>
          {this.state.status ? "Ligado" : "Desligado"}
        </Text>
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