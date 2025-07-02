import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'; 


const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || '#fff'}; /* Aplica a cor de fundo dinâmica */
`;

const StyledTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${(props) => {
    if (props.currentBackgroundColor === 'black') {
      return '#fff'; 
    } else if (props.currentBackgroundColor === 'white') {
      return '#000'; 
    }
    return '#000'; 
  }};
`;

const StyledButton = styled.TouchableOpacity`
  background-color: #333;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  border-radius: 8px;
  margin-vertical: 10px;
`;

const StyledButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export default function App() {
  const [corFundo, setCorFundo] = useState('#fff');

  return (
    <StyledContainer backgroundColor={corFundo}>
      <StyledTitle currentBackgroundColor={corFundo}>Bem-vindo ao app de mudança de cor</StyledTitle>

      <StyledButton onPress={() => setCorFundo('black')}>
        <StyledButtonText>Preto</StyledButtonText>
      </StyledButton>

      <StyledButton onPress={() => setCorFundo('white')}>
        <StyledButtonText>Branco</StyledButtonText>
      </StyledButton>
    </StyledContainer>
  );
}
