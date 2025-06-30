import React, {Component} from 'react';
import {FlatList, Text, View, ScrollView, StyleSheet} from 'react-native';

class Rodape extends Component {
    render() {
        return (

                <View style={styles.container}>
                    <Text style={styles.footer}>Meu rodapé</Text>
                </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    footer: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333'
    }
})
export default Rodape;