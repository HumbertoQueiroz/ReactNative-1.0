import React, { Component } from "react";
import { View, Text, StyleSheet , TextInput, ScrollView, Switch, TouchableOpacity} from "react-native";
import Slider from  "@react-native-community/slider"
import { Picker } from "@react-native-picker/picker"; 


export default class BancoReactDesafio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome:"",
       sexo: 0,
        itensSexo:[
          {key:1, tipo:'Masculino'},
          {key:2, tipo:'Feminino'},        
       ],
       limite:500,
       estudante:false,
    }
  }


  render() {

    let renderSexoItemOnPicker=this.state.itensSexo.map((v,k)=>{
      return <Picker.Item key={k} value={k} label={v.tipo}/>
     })
    
    return (
      <ScrollView style={{flex:1, marginTop:50, paddingHorizontal:20, backgroundColor:'#fff', borderTopWidth:1, borderTopColor:'#1df3f3ff'}}>
        <Text style={{fontSize:25, margin:20, textAlign:'center', fontWeight:'bold'}}>Banco React</Text>
        <View style={{padding:8, marginBottom:20, borderWidth:1, borderRadius:8, borderColor:'#ddd' }}>
          <Text>Nome:</Text>
          <TextInput 
            placeholder="Insira seu nome"
            onChangeText={(nome)=>{ this.setState({nome:nome})}}
            style={{height:50, borderWidth:1, width:'100%', marginBottom:20, borderRadius:8, padding:8, paddingHorizontal:10}}
          />
        </View>
        <View style={{padding:8, marginBottom:20, borderWidth:1, borderRadius:8, borderColor:'#ddd' }}>
          <Text style={{fontSize:16}}>Sexo:</Text>
          <Picker
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}
          >
            {renderSexoItemOnPicker}
            
          </Picker>
          <Text style={{fontSize:16}}>Sexo: {this.state.itensSexo[this.state.sexo].tipo}</Text>
        </View>
        <View style={{padding:8, marginBottom:20, borderWidth:1, borderRadius:8, borderColor:'#ddd' }}>
          <Text style={{fontSize:16}}>Limite de saque:</Text>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            onValueChange={(valorSelecionado)=>{ this.setState({limite:valorSelecionado})}}
            minimumTrackTintColor="#1df3f3ff"
            value={this.state.limite}
            style={{marginTop:20, marginHorizontal:20}}
          />
          <Text style={{textAlign:'center', marginTop:20}}>Limite: R$ {this.state.limite.toFixed(2)}</Text>
        </View>
        <View style={{padding:8, marginBottom:20, borderWidth:1, borderRadius:8, borderColor:'#ddd' }}>
          <Text style={{fontSize:16}}>Estudante:</Text>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', padding:10,}}>
            <Switch 
              value={this.state.estudante}
              onValueChange={(valorSelecionado) => { this.setState({ estudante: valorSelecionado}) }}
              style={{margin:10, alignItems:'center', alignContent:'center',}}
              thumbColor={"#1df3f3ff"}
              trackColor={{ false: "#ddd", true: "#1df3f3ff" }}
            />
          </View>
          <Text style={{textAlign:'center'}}>
            {this.state.estudante ? "Sim" : "Não"}
          </Text>
        </View>
        <TouchableOpacity >
          <Text>Abrir conta!</Text>
        </TouchableOpacity>


      </ScrollView>

    )
  }
}