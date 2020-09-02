import React from 'react';
import { Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../../components/PageHeader';

import chooseImg from '../../../assets/images/icons/choose.png';


function EvaluateIndicationsCollaborator2() {
    const { navigate } = useNavigation();
  
    function handleNavigateToFlexibilityButton2() {      
        navigate('FlexibilityButton2');
    }

    function handleNavigateToComplexProblemsButton2() {      
        navigate('ComplexProblemsButton2');
    }

    function handleNavigateToJudgmentButton2() {      
        navigate('JudgmentButton2');
    }

    function handleNavigateToEmotionalIntelligenceButton2() {      
        navigate('EmotionalIntelligenceButton2');
    }


    return (
       
            <View style={styles.container}>
                <PageHeader />
                
                <View style={styles.insideBox}>
                <ScrollView>
                    <Image source={chooseImg} style={styles.chooseImg}/>
                    <Text style={styles.textMainScreen}>
                    Escolha qual Soft Skills deseja avaliar:
                    </Text>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToFlexibilityButton2} style={styles.button}>
                            <Text style={styles.textButton}>
                            Flexibilidade
                            </Text>
                        </RectButton>
                    </View>


                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToEmotionalIntelligenceButton2} style={styles.button}>
                            <Text style={styles.textButton}>
                            Inteligência emocional
                            </Text>
                        </RectButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToJudgmentButton2} style={styles.button}>
                            <Text style={styles.textButton}>
                            Julgamento e tomada de decisão
                            </Text>
                        </RectButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToComplexProblemsButton2} style={styles.button}>
                            <Text style={styles.textButton}>
                            Resolução de problemas complexos
                            </Text>
                        </RectButton>
                    </View>             
                </ScrollView>   
                </View>
            </View>

    );
}
export default EvaluateIndicationsCollaborator2;
