import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, RectButton, TextInput } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../../components/RadioButtons';
import PageHeader from '../../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function EmotionalIntelligenceButtonManager2() {
    const { navigate } = useNavigation();

    function handleNavigateToEvaluateIndicationsManager() {      
        navigate('EvaluateIndicationsManager2');
     } 

    function handleNavigateToFeedback() {      
       navigate('FeedbackEvaluations');
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
export default EmotionalIntelligenceButtonManager2;
