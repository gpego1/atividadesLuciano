import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    placeholder='Digite o seu nome...'
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.mensagem}>
                <Text>Olá, {name}!</Text>
            </View>
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
    content: {
        width: '80%',
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    mensagem: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },

});
