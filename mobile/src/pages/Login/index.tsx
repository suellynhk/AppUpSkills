import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import PageHeaderBack from '../../components/PageHeaderBack';

import styles from './styles';

import loginIcon from '../../assets/images/icons/login.png';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const {navigate} = useNavigation();
    function handleFiltersSubmit(){
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
                    <TextInput style={styles.input} placeholder="000.000.000-00"/>       

                    <Text style={styles.textLabel}>
                    Senha:
                    </Text>
                    <TextInput style={styles.input} placeholder="Deve conter 6 dígitos"/> 

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