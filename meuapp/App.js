import React, { Component } from "react";
import { View, Text, Image, Button, TextInput, StyleSheet } from "react-native";

class App extends Component{

	render(){
		return(
			<View style={styles.containerMain}>

			</View>
		)
	}
}

class AppInputAndButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: "",
			input:"",
		};
		
		this.entrar=this.entrar.bind(this);
	}

	entrar(){
		if(this.state.input.length>0){
			this.setState({
				nome:`Bem vindo: ${this.state.input}!`
			})
		} else{
			this.setState({
				nome:'Digite seu nome para entrar.'
			})
		}
	}

	render() {
		return (
			<View style={styles.containerMain}>
				<TextInput
					style={styles.input}
					placeholder="Digite seu nome"
					onChangeText={ 
						(text)=> {
							this.setState({input:text})
						}
					}
				/>
				<Button title="Entrar" onPress={this.entrar}/>
				<Text style={styles.texto}>{this.state.nome}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		backgroundColor: "#f1f1f1f1",
	},
	input: {
		height: 45,
		borderWidth: 1,
		borderColor: "#222",
		margin: 10,
		marginTop: "13%",
		fontSize: 20,
		padding: 10,
	},
	texto: {
		textAlign: "center",
		marginTop: 45,
	},
});

class AppState extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: "Humberto",
			sobrenome: "Caio",
			alternativeName: "Nome alternativo",
		};
		this.inverte = this.inverte.bind(this);
		this.entrar = this.entrar.bind(this);
	}

	inverte() {
		const auxNome = this.state.nome;
		this.setState({
			nome: this.state.sobrenome,
			sobrenome: auxNome,
		});
	}

	entrar(nome) {
		this.setState({
			alternativeName: nome,
		});
	}

	render() {
		const nome = "Humberto";
		const img =
			"https://i.pinimg.com/474x/d4/6e/1d/d46e1db4b0fcb94555ddf037a1a9c7f9.jpg";
		return (
			<View style={{ backgroundColor: "#f0f0f0", marginTop: "10%" }}>
				<Text style={{ color: "red", backgroundColor: "#123456" }}>Teste!</Text>
				<Image source={{ uri: img }} style={{ width: "100%", height: "20%" }} />
				<Text style={{ textAlign: "center", fontSize: 30 }}>{nome}</Text>
				<Text
					style={{
						textAlign: "center",
						fontSize: 30,
						backgroundColor: "#123456",
						color: "red",
					}}
				>
					{this.state.nome} {this.state.sobrenome}
				</Text>
				<Text style={{ textAlign: "center", fontSize: 30 }}>
					{this.state.alternativeName}
				</Text>
				<BoxImage />
				<BoxImageProps
					largura={"100%"}
					altura={"15%"}
					titulo={"Imagem de cubos"}
				/>
				<Button title="Inverter nome sobrenome" onPress={this.inverte} />
				<Button
					title="Altera nome alternativo"
					onPress={() => this.entrar("Carlos Roberto")}
				/>
			</View>
		);
	}
}

class BoxImage extends Component {
	render() {
		return (
			<Image
				source={{
					uri: "https://i.pinimg.com/474x/d4/6e/1d/d46e1db4b0fcb94555ddf037a1a9c7f9.jpg",
				}}
				style={{ width: "100%", height: "20%", marginTop: 15 }}
			/>
		);
	}
}

class BoxImageProps extends Component {
	render() {
		return (
			<View>
				<Image
					source={{
						uri: "https://i.pinimg.com/474x/d4/6e/1d/d46e1db4b0fcb94555ddf037a1a9c7f9.jpg",
					}}
					style={{
						width: this.props.largura,
						height: this.props.altura,
						marginTop: 15,
					}}
				/>
				<Text style={{ textAlign: "center", fontSize: 20 }}>
					{this.props.titulo}
				</Text>
			</View>
		);
	}
}

export default App;
