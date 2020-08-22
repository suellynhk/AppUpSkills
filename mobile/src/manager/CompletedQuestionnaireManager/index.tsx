import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import confirmationIcon from '../../assets/images/confirmacao.png'

function CompletedQuestionnaireManager() {
    const { navigate } = useNavigation();
    function handleNavigateToMainPageManager() {      
        navigate('MainScreenManager');
    }
    
    function handleNavigateToIndicateManager() {
        navigate('IndicateSomeoneManager');
    }

    return (
        <ScrollView >
        <View style={styles.container}>
            <PageHeader />

            <View style={styles.insideBox}>
                <Text style={styles.labelText}> Uhuuuu! </Text> 
                <Image source={confirmationIcon} style={styles.confirmationIcon}/>
                <Text style={styles.labelText}> Avaliação finalizada! </Text> 
                <Text style={styles.confirmationText}>
                    Não esqueça de indicar os colaboradores para que eles possam te avaliar! 
                </Text> 

                <RectButton onPress={handleNavigateToIndicateManager} style={styles.button} >
                  <Text style={styles.buttonText}> Indicar colaboradores </Text> 
                </RectButton>
     
                <RectButton onPress={handleNavigateToMainPageManager} style={styles.secondButton} >
                  <Text style={styles.buttonText}> Retornar ao menu principal </Text> 
                </RectButton>
            </View>
        </View>
        </ScrollView>
    )

}

export default  CompletedQuestionnaireManager;