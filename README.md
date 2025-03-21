# ReactNative - 1.0

[![JS License](https://img.shields.io/badge/language-JavaScript-yellow.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![React_Native License](https://img.shields.io/badge/framework-React%20Native-blue.svg)](https://reactnative.dev/)

Curso de React Native da Udemy: [React Native Criando aplicativos do zero ao avançado](https://www.udemy.com/course/crusoreactnative/)

React Native é um frameWork para desenvolvimento de **Apps** nativos para **Android** e **IOS** com um único código `javascript` combinado com `react`.

## EXPO GO

Para iniciar o projeto e realizar teste de execução utilizaremos o [Expo Go](https://docs.expo.dev/)

`npx create-expo-app@latest --template`

## Uma chave e Duas Chaves

Quando utilizamos duas chaves nas propriedades do componente estamos informando ao react native que iremos informar javascript.

```javascript
//Exemplo de duas chaves para utilizar js
<View>
  <Text style={{ color:'red'}}>Teste!</Text>
</View>
```

Quando utilizamos uma chave no valor do componente informamos ao react native que iremos utilizar uma variável.

```javascript
//Exemplo de uma chave para utilizar variável
const nome='Humberto'
<View>
  <Text>{nome}</Text>
</View>
```

## Orientação de desenvolvimento no React Native

Temos dois tipos de orientação de desenvolvimento: função e classe.

### Orientação a Função

Na **orientação a função** utilizaremos funções que retornam tags de componentes (pré-desenvolvidos como View, Text, etc), HTML e CSS.

Exemplo:

```javascript
//JS
export function default App(){
    return(
        <View>
            <Text>
                Olá mundo
            </Text>
        </View>
    )
}
```

Já na **orientação a classe** utilizaremos `class` para abranger nossos componentes.

Exemplo:

```javascript
//JS
import React, { Component } from 'react';
import { View, Text } from 'react-native'

class App extends Component{
  render(){
    return(
      <View>
        <Text>Teste</Text>
      </View>
    )
  }
}

export default App;
```

### Orientação a classe

Podemos criar vários componentes que podem ser reutilizados no react native e um método para isso é criar componentes como classes.

Para isso precisamos criar uma `class` (depois o nome da classe) e extender as características de Componente com `extends Component`, abrir chaves e utilizar a função `render()` depois abrir chaves novamente, dar o return e abrir parenteses, como no exemplo no tópico acima. Todos esses passos são obrigatórios para utilizar orientação a classe.

Depois podemos chamar o componente, normalmente dentro do componente principal ou de outro componente.

## Componentes em pastas diferentes

Podemos organizar os componentes em arquivos diferentes para melhor organização e estruturação dos projetos.

Podemos criar pastas que contém os arquivos dos componentes e importa-los no nosso arquivo principal `App.js`.

Caso tenha mais de um arquivo de componente em uma pasta, será necessário nomear cada um de forma distinta e realizar a importação com o nome da pasta e do arquivo, mas por padrão caso importe somente o nome da pasta, o react native vai procurar um arquivo com o nome index.js e irá utilizar ele.

```javascript
//Exemplo de importação com nome da pasta e arquivo
//Observe que existe um arquivo com o mome estiloStoryInsta.js na pasta componentes
import AppStorysInstagram from "./src/componentes/estiloStoryInsta"; 

//Exemplo de importação somente com nome da pasta
////Observe que existe um arquivo com o mome index.js na pasta Pessoa
import Pessoa from "./src/Pessoas";

// O componente é chamado normalmente no código independente de qual forma de import utilizar
```

## Componentes Padrão

### View

Todo componente deve ter uma View mãe que engloba todo seu conteúdo.

Para garantir que a View mão ocupe todo o conteúdo, podemos passar o style com `flex:1` garantindo que vai ocupar todo o espaço d atela.

```javascript
<View style={{flex:1}}>
  <Text>Olá mundo!</Text>
</View>
```

### Style

Todo componente tem propriedades como por exemplo `style`.

Para ciar estilo de em um componente utilizamos a propriedade style com um igual e com a abertura de chaves e para escrever em linha o estilo precisamos abrir uma segunda chave.

#### Style In line

```javascript
//Exemplo de aplicação de estilo em linha  (style in line)
<View>
  <Text style={{ color:'red', backgroundColor: '#123456', fontSize:15 }}>Teste!</Text>
</View>
```

Repare que podemos ter mais de um estilo aplicado, basta separar por vírgula.

Importante ressaltar que os estilos do react native não tem espaço,  sempre que tem mais de uma palavra, elas estarão juntos, sendo que a segunda iniciará com letra maiúscula (camelCase).

Por padrão não informamos `px` aos estilos que utilizam pixel, somente o numero, o react native da entende que é pixel e aplica, se escrever px depois do numero gera erro.

Para utilizar porcentagem para estilos como width, tem que colocar dentro de aspas e com o porcentagem depois dos números.

#### Style como variável (StyleSheet)

Podemos criar variáveis que vão funcionar como as "classes" do `css`, facilitando a reutilização do estilo para vários componentes, elas são criadas com o método `StyleSheet.create({})`.

A criação da variável de estilo **deve ser fora do componente.**

Podemos aplicar mais de uma variável de estilo para um componente, basta usar a chaves e dentro dela usar colchetes para indicar ao react native que esse componente vai receber uma lista (array) de estilos,  `{[ style01, style02]}` como exemplo abaixo:

```javascript
class App extends Component{
  render(){
    return(
      <View style={styles.area} /* Usando Style Sheet*/>
        <Text style={[styles.TextoPrincipal,alinhaTexto]}> Texto 01<Text/>
        <Text style={alinhaTexto}> Texto 01<Text/>
        <Text style={styles.TextoPrincipal}> Texto 01<Text/>
      <View/>
    )
  }
}

const styles=StyleSheet.create({
  area:{
    marginTop:15
  },
  TextoPrincipal:{
    fontSizw:25,
    color:'#FF0000'
  }, 
  alinhaTexto:{
    textAlign:'center'
  }
})
```

#### Flexbox

Podemos utilizar o flex box para facilitar o desenvolvimento e o layout dos aplicativos no react native.

Como citado na sessão sobre a View, todo componente deve ser envolvido por uma View mãe e podemos utilizar `flex:1` para que ele ocupe todo o tamanho da tela.

Mas e os componentes filhos? Podemos utilizar o `flex:1` neles também, mas terá um comportamento um pouco diferente, caso tenha apenas um componente filho, ele ocupará toda a tela, mas cado tenha mais de um, o flexbox vai fazer com que ocupem o mesmo tamanho na tela, ou seja, se forem dois, cada um vai ocupar metade da tela, se for 3, cada um ocupa um terço da tela.

![Exemplo do flex 1 em vários componentes filhos](image.png)

Caso queira que um dos componentes filhos ocupe o dobro que outro, basta definir `flex:2`, assim ele ocupará o dobro dos demais.

![Exemplo de flex 2 em vários componentes filhos](image-1.png)

### TextInput

Para receber dados do usuário podemos utilizar o componente `<TextInput />`

#### Propriedades TextInput

**placeholder:** Texto que aparece por default no campo em cinza antes do usuário iniciar a digitação. 

**onChangeText:** Função que é executada quando digita no TextInput, ***por padrão ele retorna o texto digitado.***

### Button

Button é o mais básico botão do react native, ao ser pressionado ele executa uma função `onPress`.

>[!Warning]
>
>Também é conhecido por vir com uma estilização padrão e ser difícil de estilizar, por isso é pouco usado.

#### Propriedades do Button

**title:** será o texto exibido dentro do `button`.

**onPress:**Função que é executada quando clicado no `button`.

### Button TouchableOpacity

Este normalmente é o botão mais utilizado, por facilitar a estilização.

>[!Note]
>
> Já vem com o efeito de 'click' por padrão,  vem sem estilização padrão o que facilita a estilização personalizada.

### Image

Para que o react native renderize a imagem na tela obrigatoriamente tem que passar a propriedade style com dois estilos `width` e `height`.

Para utilizar imagens da internet através de url, tem que utilizar a propriedade source e dentro de duas chaves utilizar primeiro `uri:` e depois passar a url.

```javascript
//Exemplo de utilização de imagem  com url estática e com url variável
 const img = 'https://i.pinimg.com/474x/d4/6e/1d/d46e1db4b0fcb94555ddf037a1a9c7f9.jpg'
<View>
  <Image source={{uri:'https://i.pinimg.com/474x/d4/6e/1d/d46e1db4b0fcb94555ddf037a1a9c7f9.jpg'}}  style={{width:'100%', height:'80%'}}/>
  <Image source={{uri:img}}  style={{width:'100%', height:'80%'}}/>
</View>
```

Para exibir imagens que estão dentro dos arquivos do nosso projeto, vamos utilizar o `require()` dentro das chaves da nossa propriedade `source`.

```javascript
  class App extends Component{
    render(){
      return(
        <View style={styles.containerMain}>
          <Image source={require('./src/logo_mini.svg')}/>
        </View>
      )
    }
}
```

### ScrollView

A `View` por padrão não ceita rolagem da tela, caso altura total dos componentes sejam maior que o tamanho da tela, os últimos elementos serão cortados e não será possível acessar/visualizar.

Para solucionar isso podemos utilizar a `ScrollView`, que permite a rolagem da página.

```javascript
<View style={styles.containerMain}>
  <ScrollView >
    <View style={styles.box1}><Text>teste</Text></View>
    <View style={styles.box2}><Text>teste</Text></View>
    <View style={styles.box3}><Text>teste</Text></View>
    <View style={styles.box4}><Text>teste</Text></View>
  </ScrollView>
</View>
```

#### Propriedade showsVerticalScrollIndicator

A propriedade `showsVerticalScrollIndicator` recebe um valor boleando indicando se vai aparecer a barra de rolagem/navegação no canto direito da tela, por padrão vem `true` que exibe, mas os designer de aplicativos modernos vem optando omitir a barra, sendo definido como `false`.

```javascript
  <ScrollView showsVerticalScrollIndicator={false}>
  </ScrollView>
```

#### Propriedade scrollEnabled

A propriedade `scrollEnabled` controla se o usuário poderá scrollar a tela ou não, por padrão a propriedade vem com `true`, mas pode ser passado false para desabilitar o rolar da tela, pode ser útil para designer.

#### Propriedade horizontal

A propriedade `horizontal`  é responsável por inverter o sentido da rolagem da tela par ahorizontal, por padrão vem `false`, mas alterando para `true` temos uma rolagem horizontal.

>[!Note]
>
>Os story do Instagram, Facebook e WhatsApp são feitos assim, `ScrollView` com rolagem horizontal.

**A**tenção: Ao utilizar o `horizontal={true}` vai ser habilitado uma barra de rolagem horizontal, para desativar utilizaremos uma propriedade diferente da vertical, terá que definir como `false` a propriedade `showsHorizontalScrollIndicator={false}`

```javascript
  <View style={styles.containerMain}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.box1}><Text>teste</Text></View>
      <View style={styles.box2}><Text>teste</Text></View>
      <View style={styles.box3}><Text>teste</Text></View>
      <View style={styles.box4}><Text>teste</Text></View>
      <View style={styles.box2}><Text>teste</Text></View>
      <View style={styles.box3}><Text>teste</Text></View>
      <View style={styles.box4}><Text>teste</Text></View>
      <View style={styles.box2}><Text>teste</Text></View>
      <View style={styles.box3}><Text>teste</Text></View>
      <View style={styles.box4}><Text>teste</Text></View>
    </ScrollView>
  </View>
```

### FlatList

Usado para mater performance do aplicativo quando vai exibir listas muito grandes, tem a característica de não carregar e renderizar toda a lista na tela, renderiza apenas o que ocupa o espaço da tela e o que fica "oculto" não é carregado de início, somente quando houver o scroll ele irá carregar e renderizar mais informação, também apenas o que ocupa a tela, mantendo esse padrão tornando o aplicativo mais leve quando se trata de grandes listas.

Obrigatoriamente tem três propriedades `data`que é a **lista** com (todos) os dados que poderão ser exibidos, `renderItem` será uma função anonima que **retorna** um componente com a formatação de exibição de cada item da lista que será renderizado conforme somente o conteúdo que cabe na tela, e conforme scroll outros itens serão renderizados (conforme regra explicada acima) e `keyExtractor` que define a **chave única** de cada item da lista, toda lista deve ter esta propriedade.

A propriedade `data` será uma lista com objetos dentro dela, podendo ser um estado ou uma variável.

```javascript
//Exemplo do dado a ser exibido, deve ser uma lista e dentro dela ter objtos.
  this.feedVariavel= [
      { id:'1', nome: "Humberto", idade: 30, email: "humberto@devhumberto.com.br" }]
//Exemplo da propriedade data recebendo os dados
  data={this.state.feed}
```

A propriedade `renderItem` deve ter uma função anonima que **recebe** cada item da lista, para isso é necessário desconstruir o dado (passado na propriedade `data`) que recebemos por padrão com a utilização do operador de desconstrução {} dentro dos () da função.

```javascript
  renderItem={({ item }) => { }}
```

A função anonima deve obrigatoriamente **retornar** um componente, com a formatação de exibição de cada item da lista, caso tenha apenas uma linha, pode não utilizar `return`e nem as chaves, mas caso tenha mais uma linha deve utilizar.

```javascript
// Uma linha
  renderItem={({ item }) => <Pessoa data={item} />}

// Duas linhas obrigatoriamente utilizando return e chaves
  renderItem={({ item }) => {
    return <Pessoa data={item} />;
  }}

// Componente que é retornado na função anonima do renderItem.
// Este componente recebe como propriedade o item e faz a estilização para retornar
// Como o conteúdo de cada item é um objeto, acessamos cada dado dentro do objeto com this.props.data.nomeDeCadaPropriedade
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

```

Exemplo completo de utilização do `flatList` com dados armazenados em state ou variável

```javascript
class App extends Component {
  constructor(props) {
    super(props);
    //dados armazenado como state
    this.state = {
      feed: [
        { id:'1', nome: "Humberto", idade: 30, email: "humberto@devhumberto.com.br" },
        { id:'2', nome: "Caio", idade: 29, email: "caio@devhumberto.com.br" },
        { id:'3', nome: "França", idade: 40, email: "franca@devhumberto.com.br" },
        { id:'4', nome: "Queiroz", idade: 45, email: "queiroz@devhumberto.com.br" },
        { id:'5', nome: "Carlos", idade: 55, email: "carlos@devhumberto.com.br" },
        { id:'6', nome: "Roberto", idade: 35, email: "roberto@devhumberto.com.br" },
      ],
    };
    //dado armazenado como variável
    this.feedVariavel= [
      { id:'1', nome: "Humberto", idade: 30, email: "humberto@devhumberto.com.br" },
      { id:'2', nome: "Caio", idade: 29, email: "caio@devhumberto.com.br" },
      { id:'3', nome: "França", idade: 40, email: "franca@devhumberto.com.br" },
      { id:'4', nome: "Queiroz", idade: 45, email: "queiroz@devhumberto.com.br" },
      { id:'5', nome: "Carlos", idade: 55, email: "carlos@devhumberto.com.br" },
      { id:'6', nome: "Roberto", idade: 35, email: "roberto@devhumberto.com.br" },
    ]
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <FlatList
          style={{ backgroundColor: "#987", color: "#fff" }}
          //Exemplo de dado como state
          data={this.state.feed}
          //Exemplo de dado como variável
          //data={this.feedVariavel}
          keyExtractor={(item)=>item.id}
          renderItem={({ item }) => {
            return <Pessoa data={item} />;
          }}
        />
      </View>
    );
  }
  }
```

### Picker


## Componentes personalizados

### Passando propriedades para Components Personalizados

Podemos passar propriedades personalizadas para nossos componentes quando chamamos eles como fazemos nos componentes padrões, a diferença vai estar lá dentro do nosso componente personalizado.

```javascript
//Exemplo de Propriedades personalizadas no componente personalizado
<View>
  <BoxImageProps largura={'100%'} altura={'35%'}/>
</View>
```

A diferença esta dentro do componente, onde vamos utilizar o `this.props.` para acessar a propriedade passada e utilizar ele como valor.

```javascript
//Exemplo de Componente personalizado utilizando as propriedades passadas no exemplo anterior
class BoxImageProps extends Component{
  render(){
    return(
      <Image 
        source={{uri:'https://i.pinimg.com/474x/d4/6e/1d/d46e1db4b0fcb94555ddf037a1a9c7f9.jpg'}} 
        style={{width:this.props.largura, height:this.props.altura, marginTop:15}}
      />
    )
  }
}
```

### Precisa utilizar uma View mãe no componente?

Caso seja retornado apenas uma 'tag' não precisa, mas caso retorne mais de uma 'tag' (componente) obrigatoriamente eles devem estar dentro de uma View mãe

## States

### States na orientação a classe

Para utilizar estados na orientação de classe precisa criar um construtor que recebe as propriedades atuais, definir uma propriedade `super(props)`que recebe as propriedades, depois utilizamos o `this.state` que recebe os estados, podendo passar mais de um como exemplo:

```javascript
//Exemplo de estado com classe
 class App extends Component {
  constructor (props){
    super(props);
    this.state={
      nome:'Humberto',
      sobrenome:'Caio',
      alternativeName:'Nome alternativo'
    };
  }
```

Para que possamos alterar os valores dos estados precisamos utilizar o método `this.setStates`.

Mas para isso precisamos deixar que a função possa acessar todas as propriedades e estados, dando um `.bind` dentro do construtor na função que vai alterar o valor.

Lembrando que se passar o novo valor direto na função precisa ter uma função anonima.

```javascript
  class App extends Component {
    constructor (props){
      super(props);
      this.state={
        nome:'Humberto',
        sobrenome:'Caio',
        alternativeName:'Nome alternativo'
      };
      this.inverte = this.inverte.bind(this) //Dando bind na função
      this.entrar = this.entrar.bind(this) //Dando bind na função
    }

    inverte(){
      const auxNome = this.state.nome
      this.setState({ //Alterando o valor do estado
        nome:this.state.sobrenome,
        sobrenome: auxNome
      })
    }

    entrar(nome){
      this.setState({ //Alterando o valor do estado
        alternativeName:nome
      })
    }
    render() {
      const nome = "Humberto";
      return(
        <View>
          <Button title="Inverter nome sobrenome" onPress={this.inverte}/>
          <Button title="Altera nome alternativo" onPress={()=>this.entrar('Carlos Roberto')}/>
        <View/>
      )
  }
```

