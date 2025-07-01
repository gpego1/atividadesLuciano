import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Touchable} from 'react-native';

export default function App() {
    const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Contador: {contador}</Text>

        <TouchableOpacity onPress={() => setContador(contador + 1)}>
            <Text style={{fontSize: 20, color: 'green'}}>Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setContador(contador - 1)}>
            <Text style={{fontSize: 20, color: 'red'}}>Decrementar</Text>
        </TouchableOpacity>

      <TouchableOpacity onPress={() => setContador(0)}>
        <Text style={{fontSize: 20, color: 'blue'}}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
