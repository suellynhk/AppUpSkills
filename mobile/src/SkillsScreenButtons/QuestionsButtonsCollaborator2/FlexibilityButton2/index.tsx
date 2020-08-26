import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function FlexibilityButton2() {
    const { navigate } = useNavigation();

    function handleNavigateToEvaluateIndications() {      
        navigate('EvaluateIndicationsCollaborator2');
     } 

    function handleNavigateToFeedback() {      
       navigate('FeedbackEvaluations');
    } 

    return (
        <ScrollView>
            <View style={styles.container}>
            
                <PageHeader />
                <View style={styles.insideBox}>
                <Text style={styles.titleText}> Flexibilidade</Text>
                        <Text style={styles.descriptionText}>
                        {'  '}Capacidade de criar ou usar diferentes conjuntos de regras para 
                        resolver diversas situações a combinar ou agrupar as coisas de 
                        diferentes maneiras.
                        </Text>
                        <Text style={styles.questionText}> 
                        1. Consegue pensar em ideias e alternativas distintas 
                        das habituais para atingir os resultados
                        </Text>
                        <RadioButtonComponent />
                       
                        <Text style={styles.questionText}>
                        2. Trabalha com diversas atividades aprendendo novos desafios
                        </Text>
                        <RadioButtonComponent />

                        <Text style={styles.questionText}>
                        3. Consegue mudar de estratégia e tenta novas possibilidades para atingir o resultado
                        </Text>
                        <RadioButtonComponent />

                    <View style= {styles.bottomButton}>
                        <RectButton onPress={handleNavigateToEvaluateIndications} style={styles.button}>
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
export default FlexibilityButton2;