import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            infoUsuario: [
                {nome: 'João', idade: 25, cidade: 'Indaiatuba'},
                {nome: 'Maria', idade: 30, cidade: 'São Paulo'},
                {nome: 'Pedro', idade: 22, cidade: 'Campinas'},
                {nome: 'Ana', idade: 28, cidade: 'Sorocaba'},
                {nome: 'Lucas', idade: 35, cidade: 'São José dos Campos'},
            ]
        };
    }

    render(){
      return (
          <View style={styles.container}>
              <FlatList
                  data={this.state.infoUsuario}
                  renderItem={ ({item}) => <CardUsuario nome={item.nome} idade={item.idade} cidade={item.cidade} /> }
              />
          </View>
      );
  }
}

class CardUsuario extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.saudacao}>Olá, {this.props.nome}!</Text>
                <Text style={styles.texto}>Idade: {this.props.idade}</Text>
                <Text style={styles.texto}>Cidade: {this.props.cidade}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    texto: {
        fontSize: 20,
        color: '#333',
    },
    saudacao: {
            fontSize: 24,
            color: '#000',
            fontWeight: 'bold',
        },

})

export default App;