import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [corFundo, setCorFundo] = useState('#fff');

  return (
      <View style={[styles.container, { backgroundColor: corFundo }]}>
        <Text style={styles.titulo}>Bem-vindo ao app de mudança de cor</Text>

        <TouchableOpacity style={styles.botao} onPress={() => setCorFundo('red')}>
          <Text style={styles.textoBotao}>Vermelho</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setCorFundo('blue')}>
          <Text style={styles.textoBotao}>Azul</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
