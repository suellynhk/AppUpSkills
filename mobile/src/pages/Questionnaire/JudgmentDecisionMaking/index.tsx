import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import leftIcon from '../../../assets/images/icons/left.png';
import rightIcon from '../../../assets/images/icons/right.png';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function JudgmentDecisionMaking() {
    const { navigate } = useNavigation();

    function handleNavigateToEmotionalIntelligence() {      
        navigate('EmotionalIntelligence');
     }; 
    
    function handleNavigateToPeopleManagement() {      
       navigate('PeopleManagement');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                        <Text style={styles.titleText}> Julgamento e Tomada de Decisão  </Text>
                        <Text style={styles.descriptionText}>
                        {'  '}Capacidade de analisar dados (em diferentes níveis 
                        de complexidade) em ambientes de alta complexidade tomando decisões assertivas.
                        </Text>
                        <Text style={styles.questionText}> 
                        1. Busca soluções para os problemas.
                        </Text>
                        <RadioButtonComponent />
                       
                        <Text style={styles.questionText}>
                        2. Organiza recursos e busca seu autodesenvolvimento para alcance dos objetivos.
                        </Text>
                        <RadioButtonComponent />

                        <Text style={styles.questionText}>
                        3. Identifica riscos e antecipa-se aos problemas.
                        </Text>
                        <RadioButtonComponent />

                    <View style= {styles.bottomButton}>
                        <BorderlessButton onPress={handleNavigateToEmotionalIntelligence} style={styles.button}>
                            <Image source={leftIcon} style={styles.buttonImg}/>
                        </BorderlessButton>

                        <BorderlessButton onPress={handleNavigateToPeopleManagement} style={styles.button}>
                            <Image source={rightIcon} style={styles.rightButtonImg}/>
                        </BorderlessButton>
                    </View>
 
                </View>
            </View>
        </ScrollView>

    );
}
export default JudgmentDecisionMaking;
