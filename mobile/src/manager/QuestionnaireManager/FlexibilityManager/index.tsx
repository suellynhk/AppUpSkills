import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import RadioButtonComponent from '../../../components/RadioButtons';
import rightIcon from '../../../assets/images/icons/right.png';
import PageHeader from '../../../components/PageHeader';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';


function FlexibilityManager() {
    const { navigate } = useNavigation();
    function handleNavigateToComplexProblemsSolvingManager() {      
       navigate('ComplexProblemsSolvingManager');
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

                    <View style= {styles.bottomButton}>
                        <BorderlessButton onPress={handleNavigateToComplexProblemsSolvingManager}style={styles.button}>
                            <Image source={rightIcon} style={styles.rightButtonImg}/>
                        </BorderlessButton>
                    </View>
                   </ScrollView>
                </View>
            </View>


    );
}
export default FlexibilityManager;
