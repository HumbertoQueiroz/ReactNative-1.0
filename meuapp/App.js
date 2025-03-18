import React, { Component } from "react";
import { View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";

class App extends Component{

	constructor(props){
		super(props);
		this.state={
			textoFrase:"",
			img:require('./src/logo_mini.png'),
			isBigImg:false
		}
		this.exibeFrase=this.exibeFrase.bind(this)
		this.frases=[
			"Que a força esteja com você. - Star Wars",
			"A vida encontra um caminho. - Jurassic Park",
			"Até a vitória, sempre. - Capitão América: O Primeiro Vingador",
			"Por que caímos? Para aprendermos a nos levantar. - Batman Begins",
			"Grandes poderes trazem grandes responsabilidades. - Homem-Aranha",
			"A esperança é uma coisa boa, talvez a melhor de todas, e coisas boas nunca morrem. - Um Sonho de Liberdade",
			"Oh sim, o passado pode doer. Mas, do jeito que vejo, você pode fugir dele ou aprender com ele. - O Rei Leão",
			"O que fazemos em vida ecoa na eternidade. - Gladiador",
			"Alguns são feitos para usar as asas, outros são feitos para usar as muletas. - Um Sonho de Liberdade",
			"Nós vamos precisar de um barco maior. - Tubarão",
			"Ao infinito... e além! - Toy Story",
			"A vida não é sobre o quão duro você consegue bater, mas sobre quão duro você consegue ser atingido e continuar seguindo em frente. É assim que a vitória é conquistada! - Rocky Balboa",
			"A única maneira de lidar com o mundo é abraçar sua loucura. - O Lado Bom da Vida",
			"Não importa o que digam a você, palavras e ideias podem mudar o mundo. - Sociedade dos Poetas Mortos",
			"A aventura é lá fora! - Up: Altas Aventuras",
			"O que você espera? Que eu diga 'tudo bem'? Que tudo fique bem? O mundo não é assim, como você conta para seus filhos que ele é. - O Curioso Caso de Benjamin Button",
			"A única maneira de vencer é jogar. - Xadrez",
			"Não tente. Faça ou não faça. Não existe tentar. - Star Wars: Episódio V - O Império Contra-Ataca",
			"A jornada é mais importante que o destino. - Piratas do Caribe: A Maldição do Pérola Negra",
			"Acredite em si mesmo e tudo será possível. - Ratatouille"
		]
	}

	exibeFrase(){
		const numeroAleatorio= Math.floor(Math.random() * this.frases.length);
		this.setState((prevState) => ({
      textoFrase: `"${this.frases[numeroAleatorio]}"`,
      isBigImg: !prevState.isBigImg,
      img: prevState.isBigImg
        ? require("./src/logo_mini.png")
        : require("./src/logo_long.png"),
    }));
  
	}

	render(){
		return(
			<View style={[styles.containerMain,styles.alignCenter]}>
				<Image 
					source={this.state.img}
					style={this.state.isBigImg?styles.imgBig:styles.imgSmall}
				/>
				<Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
				<TouchableOpacity 
					style={styles.button}
					onPress={this.exibeFrase}
				>
					<View style={styles.btnArea}>
						<Text style={styles.btnTexto}>Surpreender-se </Text>
					</View>
				</TouchableOpacity>
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

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		backgroundColor: "#f1f1f1f1",
		paddingTop:'13%'
	},
	alignCenter:{
		alignItems:'center',
		justifyContent:'center'
	},
	textoFrase:{
		fontSize:20,
		color:'#dd7b22',
		margin:30,
		textAlign:'center'
	},
	button:{
		width:230,
		height:50,
		borderWidth:2,
		borderColor:'#dd7b22',
		borderRadius:50,
	},
	btnArea:{
		flex:1,
		flexDirection:'',
		justifyContent:'center',
		alignItems:'center'
		},
		btnTexto:{
			fontSize:18,
			fontWeight:'bold',
			color:'#dd7b22'
		},
	imgSmall:{
		width:67.7,
		height:50
	},
	imgBig:{
		width:400,
		height:74.3
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