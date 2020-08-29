import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import leftIcon from '../../../assets/images/icons/left.png';
import rightIcon from '../../../assets/images/icons/right.png';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function EmotionalIntelligenceManager() {
    const { navigate } = useNavigation();

    function handleNavigateToComplexProblemsSolvingManager() {      
        navigate('ComplexProblemsSolvingManager');
     } 

    
    function handleNavigateToJudgmentDecisionMakingManager() {      
       navigate('JudgmentDecisionMakingManager');
    } 

    return (
        
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <ScrollView>
                        <Text style={styles.titleText}> Inteligência Emocional </Text>
                        <Text style={styles.descriptionText}>
                        {'  '}Capacidade de reconhecer e avaliar os seus próprios sentimentos 
                        e os dos outros, administrando-os corretamente, de forma a alcançar 
                        os objetivos estratégicos.
                        </Text>
                        <Text style={styles.questionText}> 
                        1. Identifica e controla as emoções internas, 
                        sabendo manter a calma e o equilíbrio.
                        </Text>
                        <RadioButtonComponent />
                       
                        <Text style={styles.questionText}>
                        2. Busca continuamente ampliar o autoconhecimento.
                        </Text>
                        <RadioButtonComponent />

                        <Text style={styles.questionText}>
                        3. Adapta sua conduta, lidando de forma positiva com pressões, prazos e pessoas.
                        </Text>
                        <RadioButtonComponent />

                    <View style= {styles.bottomButton}>
                        <BorderlessButton onPress={handleNavigateToComplexProblemsSolvingManager} style={styles.button}>
                            <Image source={leftIcon} style={styles.buttonImg}/>
                        </BorderlessButton>

                        <BorderlessButton onPress={handleNavigateToJudgmentDecisionMakingManager} style={styles.button}>
                            <Image source={rightIcon} style={styles.rightButtonImg}/>
                        </BorderlessButton>
                    </View>

                </ScrollView>
                </View>
            </View>

    );
}
export default EmotionalIntelligenceManager;
