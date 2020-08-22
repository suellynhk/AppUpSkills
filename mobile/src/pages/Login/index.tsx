import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert } from 'react-native';

import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import PageHeaderBack from '../../components/PageHeaderBack';

import styles from './styles';

import loginIcon from '../../assets/images/icons/login.png';
import { useNavigation } from '@react-navigation/native';
import { registerRootComponent } from 'expo';

interface Usuario {
    cpf: string,
    senha: string,
    gestor: boolean
}

function Login() {

    const usuarios : Usuario[] = [
        {
            cpf: '111.111.111-11',
            senha: '123mudar',
            gestor: true
        },
        {
            cpf: '222.222.222-22',
            senha: '123mudar',
            gestor: false
        }
    ]

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const {navigate} = useNavigation();

    function handleNavigateToRegistration() {
        navigate('Registration');
    };

    function handleFiltersSubmit(){
        const usuariosFiltrados : Usuario[] = usuarios.filter(function(item : Usuario){
            return item.cpf === cpf && item.senha === senha;
        });

        if (!usuariosFiltrados) {
            Alert.alert(
                "Iihh...",
                "Esse usuário não foi encontrado!",
            )
            return;
        };

        if (usuariosFiltrados.length === 0 ) {
            Alert.alert(
                "Ops...",
                "Você precisa preencher todos os campos!",
            )
            return;
        };

        const usuario = usuariosFiltrados[0];
       console.log(usuario)

        if (usuario.gestor === true) {
           navigate('MainScreenManager');
        }else{
           navigate('MainScreenCollaborator');
        };

    };

    return(
        <View style={styles.container}> 
            <PageHeaderBack />
                <View style={styles.loginForm}>
                    <View style={styles.loginIconBox}>
                        <Image source={loginIcon} style={styles.loginIcon}/>
                        <Text style={styles.textHeader}>
                            Realize seu login
                        </Text>
                    </View>
                    <Text style={styles.textLabel}>
                    Digite seu CPF:
                    </Text>
                    <TextInput onChangeText={ text => setCpf(text)} value={cpf} style={styles.input} placeholder="000.000.000-00"/>       

                    <Text style={styles.textLabel}>
                    Senha:
                    </Text>
                    <TextInput  onChangeText={ text => setSenha(text)} value={senha} style={styles.input} secureTextEntry placeholder="Deve conter 6 dígitos"/> 

                    <View style={styles.button}>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton} >
                            <Text style={styles.submitButtonText}> Enviar </Text>
                        </RectButton>
                        <BorderlessButton onPress={handleNavigateToRegistration}>
                            <Text style={styles.textToRegistration}>Ainda não possuo cadastro</Text>
                        </BorderlessButton>
                    </View>
                </View>
        </View>
    )
}

export default Login;