import React, {Component} from 'react';
import {FlatList, Text, View, ScrollView, StyleSheet} from 'react-native';

class Rodape extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={true}>
                <View style={styles.container}>
                    <Text style={styles.footer}>Meu rodapé</Text>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#f0f0f0',
        padding: 10,
        bottom: 0
    },
    footer: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333'
    }
})
export default Rodape;