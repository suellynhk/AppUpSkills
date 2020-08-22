import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PageHeader from '../../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import confirmationIcon from '../../../assets/images/confirmacao.png'

function ValidatedIndication() {

    const { navigate } = useNavigation();
    function handleNavigateToMainPage() {      
        navigate('MainScreenManager');
    }

    return (
        <View style={styles.container}>
            <PageHeader />

            <View style={styles.insideBox}>
                <Text style={styles.labelText}> Obrigado! </Text> 
                <Image source={confirmationIcon} style={styles.confirmationIcon}/>
                <Text style={styles.confirmationText}>
                   A avaliação foi encaminhada!
                </Text> 
                
            
                <RectButton onPress={handleNavigateToMainPage} style={styles.button} >
                  <Text style={styles.buttonText}> Retornar ao menu principal </Text> 
                </RectButton>
            </View>
        </View> 
    )

}

export default ValidatedIndication;