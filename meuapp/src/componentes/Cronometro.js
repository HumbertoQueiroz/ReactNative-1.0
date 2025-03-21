import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { stylesMain } from "../../App";


const {height} = Dimensions.get('window')


class AppCronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      textBtn: "GO!",
      ultimoTimer: null,
    };

    //Variável do timer relógio
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.clear = this.clear.bind(this);
  }

  vai() {
    if (this.timer != null) {
      //Para o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        textBtn: "GO!",
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1,
          textBtn: "STOP",
        });
      }, 100);
    }
  }
  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimoTimer: this.state.numero,
      numero: 0,
      textBtn: "GO!",
    });
  }

  render() {
    return (
      <View style={[{height:height}, stylesMain.alignCenter, stylesCompCronometro.background, {paddingTop:'20%'}]}>
        <Image
          source={require("../clock.png")}
          style={[stylesCompCronometro.cronometro]}
        />
        <Text style={stylesCompCronometro.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={[stylesMain.btnArea2, stylesMain.alignCenter]}>
          <TouchableOpacity
            style={
              this.timer
                ? [
                    stylesMain.alignCenter,
                    stylesMain.btnCronometro,
                    stylesMain.backgroundOrange,
                  ]
                : [stylesMain.alignCenter, stylesMain.btnCronometro]
            }
            onPress={this.vai}
          >
            <Text
              style={
                this.timer
                  ? [stylesMain.btnTexto, stylesMain.colorWhite]
                  : [stylesMain.btnTexto]
              }
            >
              {this.state.textBtn}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[stylesMain.btn, stylesMain.alignCenter, stylesMain.btnCronometro]}
            onPress={this.clear}
          >
            <Text style={stylesMain.btnTexto}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={stylesMain.alignCenter}>
          <Text style={stylesCompCronometro.text}>
            {" "}
            {this.state.ultimoTimer > 0
              ? 'Último tempo:'
              : ""}
          </Text>
          <Text style={[stylesCompCronometro.text, stylesCompCronometro.textBold]}>
            {" "}
            {this.state.ultimoTimer > 0
              ? `${this.state.ultimoTimer.toFixed(1)}s`
              : ""}
          </Text>
        </View>
      </View>
    );
  }
}

export default AppCronometro;

const stylesCompCronometro = StyleSheet.create({
  timer: {
		marginTop: -130,
		fontSize: 50,
		fontWeight: "bold",
		color: "#dd6922",
	},
	cronometro: {
		width: 350,
		height: 350,
	},
  background:{
    backgroundColor:'#f1f1f1'
  },
  text:{
    fontSize:20,
    marginTop:15,
  },
  textBold:{
    fontWeight:'bold'
  }
})