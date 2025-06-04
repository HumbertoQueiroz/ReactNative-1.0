import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; 


class MyPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      itensPizzas:[
        {key:1, nome:'Queijo', valor: 35.99},
        {key:2, nome:'Calabresa', valor: 33.99},
        {key:3, nome:'Brigadeiro', valor: 25},
        {key:4, nome:'Bacon', valor: 34.99}
      ]
    }
  }


  render() {
    let pizzasItem=this.state.itensPizzas.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.nome}/>

    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
          {pizzasItem}
          
        </Picker>
        <Text style={styles.pizza}>Você escolheu:</Text>
        <Text style={[styles.pizza, {fontWeight:'bold'}]}>Pizza de {this.state.itensPizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizza}>{this.state.itensPizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    )
  }
}

export default MyPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor:'#fff'
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizza: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
})