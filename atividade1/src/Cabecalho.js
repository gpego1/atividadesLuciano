import React, {Component} from 'react';
import {FlatList, Text, View, ScrollView, StyleSheet} from 'react-native';

class Cabecalho extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Meu cabeçalho</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner:{
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#f0f0f0',
        padding: 10,
        top: 0
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333'
    }

})
export default Cabecalho;