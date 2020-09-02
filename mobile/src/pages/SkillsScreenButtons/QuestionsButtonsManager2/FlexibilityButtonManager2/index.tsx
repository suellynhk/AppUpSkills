import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, RectButton, TextInput } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../../components/RadioButtons';
import PageHeader from '../../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function FlexibilityButtonManager2() {
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
export default FlexibilityButtonManager2;
