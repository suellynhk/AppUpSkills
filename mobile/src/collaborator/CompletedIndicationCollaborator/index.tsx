import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import confirmationIcon from '../../assets/images/confirmacao.png'

function CompletedIndicationCollaborator() {
    const { navigate } = useNavigation();
    function handleNavigateToMainPageCollaborator() {      
        navigate('MainScreenCollaborator');
    }

    return (
        <ScrollView >
        <View style={styles.container}>
            <PageHeader />

            <View style={styles.insideBox}>
                <Text style={styles.labelText}> Obrigado! </Text> 
                <Image source={confirmationIcon} style={styles.confirmationIcon}/>
                <Text style={styles.confirmationText}>
                    {"   "}Agora seu pedido será encaminhado aos seus colegas! Você pode acompanhar os resultados mais tarde através do
                    Dashboard disponível no menu principal!
                </Text> 
     
                <RectButton onPress={handleNavigateToMainPageCollaborator} style={styles.button} >
                  <Text style={styles.buttonText}> Retornar ao menu principal </Text> 
                </RectButton>
            </View>
        </View>
        </ScrollView>
    )

}

export default CompletedIndicationCollaborator;