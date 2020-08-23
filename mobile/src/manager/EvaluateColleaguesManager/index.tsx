import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';

import colleaguesImg from '../../assets/images/icons/evaluation-colleagues.png';

function EvaluateColleaguesManager() {
    const {navigate} = useNavigation();
  

    function handleNavigateToSkillsScreenManager() {
        navigate('SkillsScreenManager');
    }


    function handleNavigateToSkillsScreenManagerS() {
        navigate('SkillsScreenManagerS');
    }
  
    function handleNavigateToRefusedEvaluation() {
        navigate('RefusedEvaluationManager');
    }

  
    return (
        <ScrollView >
            <View style={styles.container}>
                <PageHeaderBack />
                
                <View style={styles.insideBox}>
                    <Image source={colleaguesImg} style={styles.colleaguesImg}/>

                    <Text style={styles.textPendingEvaluation}>
                    Avaliação de colabores e gestores:
                    </Text>

                    <Text style={styles.textEvaluation}>
                    Agora é sua vez de avaliar os colaboradores que te indicaram para avaliá-los! {'\n'}
                    {'\n'}
                    Deseja realizar a avaliação?
                    </Text>

                    <View style={styles.indications}>
                        <Text style={styles.names}>Sandra Dias</Text>
                        <View style= {styles.buttonsContainer}>
                            <RectButton  onPress={handleNavigateToSkillsScreenManager} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Sim
                                </Text>
                            </RectButton>
                            <RectButton  onPress={handleNavigateToRefusedEvaluation} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Não
                                </Text>
                            </RectButton>
                        </View>
                    </View>

                    <View style={styles.indications}>
                        <Text style={styles.names}>Matheus Oliveira (Gestor)</Text>
                        <View style= {styles.buttonsContainer}>
                            <RectButton onPress={handleNavigateToSkillsScreenManagerS} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Sim
                                </Text>
                            </RectButton>
                            <RectButton onPress={handleNavigateToRefusedEvaluation} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Não
                                </Text>
                            </RectButton>
                        </View>
                    </View>

                    <View style={styles.indications}>
                        <Text style={styles.names}>Augusto Vaz</Text>
                        <View style= {styles.buttonsContainer}>
                            <RectButton  onPress={handleNavigateToSkillsScreenManager} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Sim
                                </Text>
                            </RectButton>
                            <RectButton  onPress={handleNavigateToRefusedEvaluation} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Não
                                </Text>
                            </RectButton>
                        </View>
                    </View>

                </View>    
            </View>
        </ScrollView>  
    );
}
export default EvaluateColleaguesManager;