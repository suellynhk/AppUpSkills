import React from 'react';
import { Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

import chooseImg from '../../assets/images/icons/choose.png';


function EvaluateIndicationsCollaborator() {
    const { navigate } = useNavigation();
  
    function handleNavigateToFlexibilityButton() {      
        navigate('FlexibilityButton');
    }

    function handleNavigateToComplexProblemsButton() {      
        navigate('ComplexProblemsButton');
    }

    function handleNavigateToJudgmentButton() {      
        navigate('JudgmentButton');
    }

    function handleNavigateToEmotionalIntelligenceButton() {      
        navigate('EmotionalIntelligenceButton');
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
                        <RectButton  onPress={handleNavigateToFlexibilityButton} style={styles.button}>
                            <Text style={styles.textButton}>
                            Flexibilidade
                            </Text>
                        </RectButton>
                    </View>


                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToEmotionalIntelligenceButton} style={styles.button}>
                            <Text style={styles.textButton}>
                            Inteligência emocional
                            </Text>
                        </RectButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToJudgmentButton} style={styles.button}>
                            <Text style={styles.textButton}>
                            Julgamento e tomada de decisão
                            </Text>
                        </RectButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToComplexProblemsButton} style={styles.button}>
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
export default EvaluateIndicationsCollaborator;
