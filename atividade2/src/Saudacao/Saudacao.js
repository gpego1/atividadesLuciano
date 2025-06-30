import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Saudacao extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.texto}>Olá, {this.props.nome}!</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    texto: {
        fontSize: 20,
        color: '#333',
    },
})
export default Saudacao;