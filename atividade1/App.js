import React, {Component} from 'react';
import {FlatList, Text, View, ScrollView, StyleSheet} from 'react-native';
import Cabecalho from "./src/Cabecalho.js";
import Rodape from "./src/Rodape.js";


class App extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Cabecalho />

                <ScrollView contentContainerStyle={styles.content}>
                <Text>Conteudo da pagina</Text>
                </ScrollView>

                <Rodape />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    content: {
        padding: 20,
        paddingBottom: 70,
        backgroundColor: '#ecf0f1'
    }
})
export default App;
