/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { FlatList} from 'react-native';
import Post from '../../components/Post';
import styles from './style'

type Props = {};
export default class Feed extends Component<Props> {
  
  constructor(){
    super();
    this.state = {
      fotos : []
    }
  }
  

  like(idFoto) {

    const foto = this.state.fotos.find(foto => foto.id === idFoto )
    
    let novalista = []

    if(!foto.likeada){
      novalista = [
        ...foto.likers,
        {login:'meuUsuarioxx'}
      ] 
    }else{
      novalista = foto.likers.filter(liker => {
        return liker.login != 'meuUsuarioxx'
      });
    }

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers : novalista
    };

    const fotos = this.state.fotos.map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada: foto);

    this.setState({ fotos: fotos });
  }

  
  adicionaComentario(idFoto, valorComentario, inputComentario){


    if(valorComentario === '')
      return;
    
    const foto = this.state.fotos.find(foto => foto.id === idFoto);
 
    const novaLista = [...foto.comentarios, {
      id: this.state.valorComentario,
      login: 'meuUsuarioxxx',
      texto: valorComentario
    }];

    const fotoAtualizada = {
      ...foto,
      comentarios: novaLista
    }

    const fotos = this.state.fotos.map(foto => foto.id === fotoAtualizada.id ? fotoAtualizada: foto);

    this.setState({ fotos: fotos });
    inputComentario.clear();
  }



  
  componentDidMount(){
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(resposta => {
        if(resposta.ok){
          return resposta.json()
        }
      })
      .then(json => {
        this.setState({fotos: json})    
      });
  }
  
  render() {

    return (

      <FlatList
        style={styles.container}
        keyExtractor={item => String(item.id)}
        data={this.state.fotos}
        renderItem={ ({item}) => 
            <Post foto={item}
                  likeCallback={this.like.bind(this)} 
                  comentarioCallback={this.adicionaComentario.bind(this)} />
          }
      />
    );
  }
}

