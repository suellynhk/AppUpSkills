import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, ScrollView, RectButton } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import leftIcon from '../../../assets/images/icons/left.png';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function JudgmentDecisionMakingCollaborator
() {
    const { navigate } = useNavigation();

    function handleNavigateToEmotionalIntelligenceCollaborator
    () {      
        navigate('EmotionalIntelligenceCollaborator');
     }; 

    function handleNavigateToCompletedQuestionnaireCollaborator() {      
       navigate('CompletedQuestionnaireCollaborator');
    };
 

    return (
        
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <ScrollView>
                        <Text style={styles.titleText}>Julgamento e Tomada de Decisão  </Text>
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
                        <BorderlessButton onPress={handleNavigateToEmotionalIntelligenceCollaborator
                        } style={styles.button}>
                            <Image source={leftIcon} style={styles.buttonImg}/>
                        </BorderlessButton>

                        <RectButton onPress={handleNavigateToCompletedQuestionnaireCollaborator} style={styles.recButton}>
                           <Text style={styles.textButton}>Finalizar</Text>
                        </RectButton>
                    </View>
 
                </ScrollView>
                </View>
            </View>
       

    );
}
export default JudgmentDecisionMakingCollaborator
;
