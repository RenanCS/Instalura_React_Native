import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput 
} from "react-native";


export default class Login extends Component {

    render(){
        return(
            <View>
                <Text placeholder="Usuário..."
                onChangeText={texto => this.setState({usuario:texto})}></Text>

                  <Text placeholder="Senha..."
                onChangeText={texto => this.setState({senha:texto})}></Text>

            </View>
        );
    }





}