import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Lista extends Component {
    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }
    mostraLikes(likers){
        let feed = this.state.feed;
        if(feed.likers <= 0){
            return;
        }
        return(
            <Text style={styles.likes}>
                {likers} {likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )
    }
    like(){
        let feed = this.state.feed;
        if(feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1,
                }
            });
        }
    }
    carregaIcone(likeada){
        return likeada ? require('../img/likeada.png') : require('../img/like.png');
    }
    render(){
        return(
            <View style={styles.areaFeed}>
                <View style={styles.viewPerfil}>
                    <Image
                    source={{uri:this.state.feed.imgperfil}}
                    style={styles.fotoPerfil}
                    />
                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>

                <Image resizeMode='cover' style={styles.fotoPublicacao} source={{uri:this.state.feed.imgPublicacao}}/>

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                        source={this.carregaIcone(this.state.feed.likeada)}
                        style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('../img/send.png')}
                            style={styles.iconeSend}
                        />
                    </TouchableOpacity>

                    {this.mostraLikes(this.state.feed.likers)}

                </View>
                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>
                        {this.state.feed.nome}
                    </Text>
                    <Text style={styles.descrRodape}>
                        {this.state.feed.descricao}
                    </Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    areaFeed: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    viewPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    fotoPerfil: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    nomeUsuario: {
        fontSize: 14,
        color: '#000',
        marginLeft: 5
    },
    fotoPublicacao: {
        width: '100%',
        height: 400,
        borderRadius: 8
    },
    areaBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    iconeLike: {
        width: 25,
        height: 25
    },
    iconeSend: {
        width: 25,
        height: 25
    },
    viewRodape: {
        marginTop: 10
    },
    nomeRodape: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    descrRodape: {
        fontSize: 14,
        color: '#000'
    },
    likes: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5
    }


})
export default Lista;