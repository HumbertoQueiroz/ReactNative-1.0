import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { stylesMain } from "../../App";


const {height} = Dimensions.get('window')

//APESAR DE SIMPLES GOSTEI DESSE PROJETO, FICOU COM MINHA CARA
class AppFrasesDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
      img: require("../logo_mini.png"),
      isBigImg: false,
    };
    this.exibeFrase = this.exibeFrase.bind(this);
    this.frases = [
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
      "Acredite em si mesmo e tudo será possível. - Ratatouille",
    ];
  }

  exibeFrase() {
    const numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState((prevState) => ({
      textoFrase: `"${this.frases[numeroAleatorio]}"`,
      isBigImg: !prevState.isBigImg,
      img: prevState.isBigImg
        ? require("../logo_mini.png")
        : require("../logo_long.png"),
    }));
  }

  render() {
    return (
      <View style={[{backgroundColor: "#f1f1f1f1", paddingTop: "13%", height:height}, stylesMain.alignCenter]}>
        <Image
          source={this.state.img}
          style={this.state.isBigImg ? stylesMain.imgBig : stylesMain.imgSmall}
        />
        <Text style={stylesMain.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={stylesMain.button} onPress={this.exibeFrase}>
          <View style={stylesMain.btnArea}>
            <Text style={stylesMain.btnTexto}>Surpreender-se </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
 
export default AppFrasesDev;