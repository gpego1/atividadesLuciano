import {StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    padding: 20px;
    padding-top: 80px;
    `;
const StyledText = styled.Text`
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
    `;

const Botao = styled.TouchableOpacity`
      background-color: #007BFF;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      width: 100%;
      align-items: center;
    `;
const Scroll = styled.ScrollView`
    flex: 1;
    background-color: #f8f8f8;
    padding: 20px;
    `;


export default function App() {
  const[input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (input.length === 0) {
      alert('Por favor, insira uma tarefa.');
      return;
    }
    setTarefas([...tarefas, input]);
    setInput('');
    alert(`Tarefa "${input}" adicionada com sucesso!`);
  }

  function removerTarefa(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
    alert(`Tarefa "${tarefas[index]}" removida com sucesso!`);
  }
  return (
      <Scroll>
    <Container>
        <StyledText>Adicione Uma tarefa:</StyledText>
        <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Digite sua tarefa"
        placeholderTextColor="#888"
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          width: '100%',
          marginBottom: 10,
        }}
        />

      <Botao onPress={(adicionarTarefa)}>
        <Text style={{color: '#fff'}}>Adicionar</Text>
      </Botao>

        <StyledText>Tarefas:</StyledText>
      {tarefas.map((tarefa, index) => (
        <View key={index} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
          <Text style={{fontSize: 18, flex: 1}}>{tarefa}</Text>
          <TouchableOpacity onPress={() => removerTarefa(index)} style={{marginLeft: 10}}>
            <Text style={{color: 'red'}}>Remover</Text>
          </TouchableOpacity>
        </View>
      ))}
    </Container>
      </Scroll>
  );
}

