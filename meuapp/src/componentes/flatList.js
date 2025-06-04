import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { stylesMain } from "../../App";

class MyFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: "Humberto", idade: 30, email: "humberto@devhumberto.com.br" },
        { id: '2', nome: "Caio", idade: 29, email: "caio@devhumberto.com.br" },
        { id: '3', nome: "França", idade: 40, email: "franca@devhumberto.com.br" },
        { id: '4', nome: "Queiroz", idade: 45, email: "queiroz@devhumberto.com.br" },
        { id: '5', nome: "Carlos", idade: 55, email: "carlos@devhumberto.com.br" },
        { id: '6', nome: "Roberto", idade: 35, email: "roberto@devhumberto.com.br" },
      ],
    };
    this.feedVariavel = [
      { id: '1', nome: "Humberto", idade: 30, email: "humberto@devhumberto.com.br" },
      { id: '2', nome: "Caio", idade: 29, email: "caio@devhumberto.com.br" },
      { id: '3', nome: "França", idade: 40, email: "franca@devhumberto.com.br" },
      { id: '4', nome: "Queiroz", idade: 45, email: "queiroz@devhumberto.com.br" },
      { id: '5', nome: "Carlos", idade: 55, email: "carlos@devhumberto.com.br" },
      { id: '6', nome: "Roberto", idade: 35, email: "roberto@devhumberto.com.br" },
    ]
  }

  render() {
    return (

      <View style={stylesMain.containerMain}>
        <FlatList
          style={{ backgroundColor: "#987", color: "#fff" }}
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return <Pessoa data={item} />;
          }}
        />

      </View>

    )
  }
}

export default MyFlatList;