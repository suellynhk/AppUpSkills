import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';

import confirmationIcon from '../../assets/images/confirmacao.png'

function ConfirmedRegistration() {
    const { navigate } = useNavigation();
    function handleNavigateToLoginPage() {      
        navigate('Login');
    }

    return (
        <ScrollView  contentContainerStyle={{flex:1}}> 
        <View style={styles.container}>
            <PageHeader />
            <View style={styles.insideBox}>
                <Text style={styles.confirmationText}> Cadastro realizado com sucesso! </Text> 
                <Image source={confirmationIcon} style={styles.confirmationIcon}/>
            
                <BorderlessButton onPress={handleNavigateToLoginPage}>
                  <Text style={styles.linkButton}> Realizar Login! </Text> 
                </BorderlessButton>

            </View>
        </View> 
        </ScrollView>
    
    )

}

export default ConfirmedRegistration;