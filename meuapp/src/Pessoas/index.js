import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { stylesMain } from "../../App";


class Pessoa extends Component {
	render() {
		return (
			<View style={styles.areaPessoa}>
				<Text style={[styles.textoPessoa]}>{this.props.data.nome}</Text>
				<Text style={[styles.textoPessoa]}>{this.props.data.idade}</Text>
				<Text style={[styles.textoPessoa]}>{this.props.data.email}</Text>
			</View>
		);
	}
}

export default Pessoa;

const styles = StyleSheet.create({
  areaPessoa:{
		backgroundColor:'#222',
		height:350,
		marginBottom:15
	},
	textoPessoa:{
		color:'#fff',
		fontSize:20
	}
})