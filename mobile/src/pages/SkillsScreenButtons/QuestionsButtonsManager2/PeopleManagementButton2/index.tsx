import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, RectButton, TextInput } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../../components/RadioButtons';
import PageHeader from '../../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function PeopleManagementButton2() {
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
export default PeopleManagementButton2;
