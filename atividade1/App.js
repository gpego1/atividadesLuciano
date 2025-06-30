import React, {Component} from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import Cabecalho from "./src/Cabecalho.js";
import Rodape from "./src/Rodape.js";


class App extends Component {
    render() {
        return(
            <View>
                <Cabecalho />
                <Rodape />
            </View>
        )
    }

}
export default App;
