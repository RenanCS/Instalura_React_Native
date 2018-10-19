import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput 
} from "react-native";


export default class InputComentario extends Component {

    constructor() {
        super();
        this.state = {
            valorComentario: ''
        }
    }

    render(){
        return (
            <View style={styles.container}>
          
                <TextInput onChangeText={texto => this.setState({valorComentario:texto})} 
                            ref={input => this.inputComentario = input}  
                            underlineColorAndroid={'transparent'}  
                            style={styles.input} 
                            placeholder="Adicione um comentário..."/>
                
                <TouchableOpacity onPress={() =>  {
                    this.props.comentarioCallback(this.props.foto, this.state.valorComentario, this.inputComentario);
                    this.setState({valorComentario:''})
                }}>
                    <Image style={styles.icone} source={require('../../resources/img/send.png')} />      
                </TouchableOpacity>
                
          </View>
        );
    }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  input:{
    flex: 1,
    height:40,
  },
  icone:{
    width:30,
    height:30
  }
});