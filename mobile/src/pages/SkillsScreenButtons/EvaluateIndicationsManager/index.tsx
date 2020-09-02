import React from 'react';
import { Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../../components/PageHeader';

import chooseImg from '../../../assets/images/icons/choose.png';



function EvaluateIndicationsManager() {
    const { navigate } = useNavigation();

    function handleNavigateToPeopleManagementButton() {      
        navigate('PeopleManagementButton');
    }
  
    function handleNavigateToFlexibilityButtonManager() {      
        navigate('FlexibilityButtonManager');
    }

    function handleNavigateToComplexProblemsButtonManager() {      
        navigate('ComplexProblemsButtonManager');
    }

    function handleNavigateToJudgmentButtonManager() {      
        navigate('JudgmentButtonManager');
    }

    function handleNavigateToEmotionalIntelligenceButtonManager() {      
        navigate('EmotionalIntelligenceButtonManager');
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
                        <RectButton  onPress={handleNavigateToFlexibilityButtonManager} style={styles.button}>
                            <Text style={styles.textButton}>
                            Flexibilidade
                            </Text>
                        </RectButton>
                    </View>


                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToEmotionalIntelligenceButtonManager} style={styles.button}>
                            <Text style={styles.textButton}>
                            Inteligência emocional
                            </Text>
                        </RectButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToJudgmentButtonManager} style={styles.button}>
                            <Text style={styles.textButton}>
                            Julgamento e tomada de decisão
                            </Text>
                        </RectButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToPeopleManagementButton} style={styles.button}>
                            <Text style={styles.textButton}>
                            Liderança
                            </Text>
                        </RectButton>
                    </View>

                    <View style={styles.buttonContainer}>
                        <RectButton  onPress={handleNavigateToComplexProblemsButtonManager} style={styles.button}>
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
export default EvaluateIndicationsManager;
