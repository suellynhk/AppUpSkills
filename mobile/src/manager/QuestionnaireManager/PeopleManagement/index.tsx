import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, ScrollView, RectButton } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import leftIcon from '../../../assets/images/icons/left.png';

import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function PeopleManagement() {
    const { navigate } = useNavigation();

    function handleNavigateToJudgmentDecisionMaking() {      
        navigate('JudgmentDecisionMakingManager');
     }; 
    
    function handleNavigateToCompletedQuestionnaireManager() {      
       navigate('CompletedQuestionnaireManager');
    };
    
    return (
       
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <ScrollView>
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
                        <BorderlessButton onPress={handleNavigateToJudgmentDecisionMaking} >
                            <Image source={leftIcon} style={styles.buttonImg}/>
                        </BorderlessButton>

                        <RectButton onPress={handleNavigateToCompletedQuestionnaireManager} style={styles.recButton}>
                           <Text style={styles.textButton}>Finalizar</Text>
                        </RectButton>
                    </View>
                </ScrollView>
                </View>
            </View>

    );
}
export default PeopleManagement;
