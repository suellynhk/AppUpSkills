import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function PeopleManagementButton2() {
    const { navigate } = useNavigation();

    function handleNavigateToEvaluateIndicationsManager() {      
        navigate('EvaluateIndicationsManager2');
     } 

    function handleNavigateToFeedback() {      
       navigate('FeedbackEvaluations');
    } 

    return (
        <ScrollView>
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <Text style={styles.titleText}> Liderança  </Text>
                        <Text style={styles.descriptionText}>
                        {'  '}Capacidade de motivar e influenciar as 
                        pessoas para o alcance de seus objetivos/ institucionais.
                        </Text>
                        <Text style={styles.questionText}> 
                        1. Busca e oferece feedback de forma positiva.
                        </Text>
                        <RadioButtonComponent />
                       
                        <Text style={styles.questionText}>
                        2. Envolve-se e comunica-se com os membros da equipe.
                        </Text>
                        <RadioButtonComponent />

                        <Text style={styles.questionText}>
                        3. Inspira e apoia a equipe na consecução de objetivos.
                        </Text>
                        <RadioButtonComponent />
                        
                    <View style= {styles.bottomButton}>
                        <RectButton onPress={handleNavigateToEvaluateIndicationsManager} style={styles.button}>
                            <Text style={styles.buttonText}>
                                Avaliar outra soft skill
                            </Text>
                        </RectButton>

                        <RectButton onPress={ handleNavigateToFeedback} style={styles.secondButton}>
                            <Text style={styles.buttonText}>
                                Finalizar
                            </Text>
                        </RectButton>
                    </View>
 
                </View>
            </View>
        </ScrollView>

    );
}
export default PeopleManagementButton2;
