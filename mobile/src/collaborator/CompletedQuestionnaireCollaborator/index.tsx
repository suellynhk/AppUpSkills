import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import answeredIcon from '../../assets/images/icons/answered.png';

function CompletedQuestionnaireCollaborator() {
    const { navigate } = useNavigation();
    function handleNavigateToMainPageCollaborator() {      
        navigate('MainScreenCollaborator');
    }
    
    function handleNavigateToIndicateCollaborator() {
        navigate('IndicateSomeoneCollaborator');
    }

    return (
        <ScrollView >
        <View style={styles.container}>
            <PageHeader />

            <View style={styles.insideBox}>
                <Text style={styles.labelText}> Uhuuuu! </Text> 
                <Image source={answeredIcon} style={styles.confirmationIcon}/>
                <Text style={styles.labelText}> Avaliação finalizada! </Text> 
                <Text style={styles.confirmationText}>
                    Não esqueça de indicar os colaboradores para que eles possam te avaliar! 
                </Text> 

                <RectButton onPress={handleNavigateToIndicateCollaborator} style={styles.button} >
                  <Text style={styles.buttonText}> Indicar colaboradores </Text> 
                </RectButton>
     
                <RectButton onPress={handleNavigateToMainPageCollaborator} style={styles.secondButton} >
                  <Text style={styles.buttonText}> Retornar ao menu principal </Text> 
                </RectButton>
            </View>
        </View>
        </ScrollView>
    )

}

export default  CompletedQuestionnaireCollaborator;