import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, RectButton, TextInput } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../../components/RadioButtons';
import PageHeader from '../../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function JudgmentButtonManager() {
    const { navigate } = useNavigation();

    function handleNavigateToEvaluateIndicationsManager() {      
        navigate('EvaluateIndicationsManager');
     } 

    function handleNavigateToFeedback() {      
       navigate('FeedbackEvaluationsManager');
    } 

    return (
       
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <ScrollView>
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

                        <Text style={styles.comment}>
                        Deixe algum comentário sobre esta avaliação:
                        </Text> 
                        <TextInput multiline={true} numberOfLines={8} textAlignVertical={'top'} style={styles.input}/> 


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
                
                </ScrollView>
                </View>
            </View>
        
    );
}
export default JudgmentButtonManager;
