import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import PageHeaderBack from '../../components/PageHeaderBack';

import styles from './styles';

import loginIcon from '../../assets/images/icons/login.png';
import { useNavigation } from '@react-navigation/native';

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
    function handleFiltersSubmit(){
        const usuariosFiltrados : Usuario[] = usuarios.filter(function(item : Usuario){
            return item.cpf === cpf && item.senha === senha;
        });

        if (!usuariosFiltrados || usuariosFiltrados.length === 0 ) {
            // mensagem de erro de usuario não encontrado
            return;
        }

        const usuario = usuariosFiltrados[0];

        if (usuario.gestor === true) {
            // navegar para tela do gestor
        }
        else{
            // navegar para tela do colaborador
        }

        navigate('MainScreen');
    }
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
                    <TextInput value={cpf} style={styles.input} placeholder="000.000.000-00"/>       

                    <Text style={styles.textLabel}>
                    Senha:
                    </Text>
                    <TextInput value={senha} style={styles.input} placeholder="Deve conter 6 dígitos"/> 

                    <View style={styles.button}>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}> Enviar </Text>
                        </RectButton>
                    </View>
                </View>
        </View>
    )
}

export default Login;