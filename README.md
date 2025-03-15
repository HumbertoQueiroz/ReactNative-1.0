# ReactNative - 1.0

[![JS License](https://img.shields.io/badge/language-JavaScript-yellow.svg)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![React_Native License](https://img.shields.io/badge/framework-React%20Native-blue.svg)](https://reactnative.dev/)

Curso de React Native da Udemy: [React Native Criando aplicativos do zero ao avançado](https://www.udemy.com/course/crusoreactnative/)

## Orientaçãdo de desenvolvimento no React Native

Temos dois tipos de orientação de desenvolvimento: função e classe.

Na **orientação a função** utilizaremos funções que retornam tags de componentes (pré-desenvolvidos como View, Text, etc), HTML e CSS.

Exemplo:

```js
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

```js
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

## Componentes

Todo componente tem propriedades como por exemplo `style`.

### Style

Para ciar estilo de em um componente utilizamos a propridedade style com um igual e com a abertura de chaves e para escrever em linha o estilo precisamos abrir uma segunda chave.

```js
//Exemplo de aplicação de estilo em linha  (style in line)
<View>
  <Text style={{ color:'red', backgroundColor: '#123456' }}>Teste!</Text>
</View>
```
