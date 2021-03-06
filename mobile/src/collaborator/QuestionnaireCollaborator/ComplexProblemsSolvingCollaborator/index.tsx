import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import leftIcon from '../../../assets/images/icons/left.png';
import rightIcon from '../../../assets/images/icons/right.png';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function ComplexProblemsSolvingCollaborator() {
    const { navigate } = useNavigation();

    function handleNavigateToFlexCollaborator() {      
        navigate('FlexibilityCollaborator');
     } 

    function handleNavigateToEmotionalIntelligenceCollaborator() {      
       navigate('EmotionalIntelligenceCollaborator');
    } 

    return (
        
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <ScrollView>
                        <Text style={styles.titleText}>Resolução de Problemas Complexos </Text>
                        <Text style={styles.descriptionText}>
                        {'  '}Capacidade de percepção adequada dos problemas e de criação 
                        de estratégias efetivas para resolver situações novas em cenários 
                        complexos.
                        </Text>
                        <Text style={styles.questionText}> 
                        1. Resolve rapidamente problemas em situações difíceis
                        </Text>
                        <RadioButtonComponent />
                       
                        <Text style={styles.questionText}>
                        2. Procura se aperfeiçoar nos conceitos inerentes 
                        à sua atuação para a resolução dos problemas
                        </Text>
                        <RadioButtonComponent />

                        <Text style={styles.questionText}>
                        3. Utiliza de estratégias inteligentes e bem definidas para a solução das adversidades
                        </Text>
                        <RadioButtonComponent />

                    <View style= {styles.bottomButton}>
                        <BorderlessButton onPress={handleNavigateToFlexCollaborator} style={styles.button}>
                            <Image source={leftIcon} style={styles.buttonImg}/>
                        </BorderlessButton>

                        <BorderlessButton onPress={handleNavigateToEmotionalIntelligenceCollaborator} style={styles.button}>
                            <Image source={rightIcon} style={styles.rightButtonImg}/>
                        </BorderlessButton>
                    </View>
                </ScrollView>
                </View>
            </View>

    );
}
export default ComplexProblemsSolvingCollaborator;
