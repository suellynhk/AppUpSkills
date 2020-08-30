import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, RectButton, TextInput } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function ComplexProblemsButton2() {
    const { navigate } = useNavigation();

    function handleNavigateToEvaluateIndications() {      
        navigate('EvaluateIndicationsCollaborator2');
     } 

    function handleNavigateToFeedback() {      
       navigate('FeedbackEvaluations');
    } 

    return (
       
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <ScrollView>
                        <Text style={styles.titleText}> Resolução de Problemas Complexos </Text>
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

                        <Text style={styles.comment}>
                        Deixe algum comentário sobre esta avaliação:
                        </Text> 
                        <TextInput multiline={true} numberOfLines={8} textAlignVertical={'top'} style={styles.input}/> 



                    <View style= {styles.bottomButton}>
                        <RectButton onPress={handleNavigateToEvaluateIndications} style={styles.button}>
                            <Text style={styles.buttonText}>
                                Avaliar outra soft skill
                            </Text>
                        </RectButton>

                        <RectButton onPress={handleNavigateToFeedback} style={styles.secondButton}>
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
export default ComplexProblemsButton2;
