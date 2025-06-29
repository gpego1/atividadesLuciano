import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View } from 'react-native';

class Titulo extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Título do App</Text>
            </View>
        );
    }
}
class Descricao extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16 }}>Descrição do App</Text>
            </View>
        );
    }
}

export default function App() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Titulo />
            <Descricao />
        </View>
        );
}
