import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
        data: [
            { key: 'a', nome: 'Marcelo', cargo: 'Pedreiro' },
            { key: 'b', nome: 'Ana', cargo: 'Engenheira' },
            { key: 'c', nome: 'João', cargo: 'Arquiteto' },
            { key: 'd', nome: 'Maria', cargo: 'Designer' },
            { key: 'e', nome: 'Carlos', cargo: 'Gerente' },
            { key: 'f', nome: 'Fernanda', cargo: 'Analista' },
            { key: 'g', nome: 'Roberto', cargo: 'Programador' },
            { key: 'h', nome: 'Patrícia', cargo: 'Consultora' },
        ],
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
                <ItemSeparator nome={item.nome} cargo={item.cargo} />
            )}
        keyExtractor={item => item.key} />
        </View>
    );
  }
}

class ItemSeparator extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#ccc' }}>
        <Text style={{fontWeight:'bold'}}>Nome: {this.props.nome}</Text>
        <Text style={{color:'black'}}>Cargo: {this.props.cargo}</Text>
      </View>
    );
  }
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      marginTop:100
  },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
    },
    textoNome: {
        flex: 1,
        fontSize: 18,
        color: '#333',
    },
    textoCargo: {
        flex: 1,
        fontSize: 18,
        color: '#666',
        textAlign: 'right',
    },
});
