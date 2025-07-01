import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const nomeInput = useRef(null);

  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nomes');
      if (nomeStorage) {
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nomes', nome);
    }
    saveStorage();
  }, [nome]);

  function alterarNome() {
    setNome(input);
    setInput('');
  }
  function novoNome(){
    nomeInput.current.focus();
  }

  const letrasNome = useMemo(() => {
    console.log('Mudou letra')
    return nome.length;
  }, [nome]);

  return (
      <View style={styles.container}>

        <TextInput
            placeholder="Digite seu nome..."
            value={input}
            onChangeText={(texto) => setInput(texto)}
            ref={nomeInput}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} onPress={alterarNome}>Alterar Nome</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Nome Atual: {nome}
        </Text>
        <Text style={styles.text}> Tem {letrasNome} letras</Text>

        <TouchableOpacity onPress={novoNome}>
          <Text>Novo nome</Text>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  btn: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },

})