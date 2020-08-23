import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';

import teamImg from '../../assets/images/icons/evaluation-team.png';

function EvaluateTeamManager() {
    const {navigate} = useNavigation();
  

    function handleNavigateToSkillsScreenManager() {
        navigate('SkillsScreenManager');
    }

    return (
        <ScrollView contentContainerStyle={{flex:1}}>
            <View style={styles.container}>
                <PageHeaderBack />
                
                <View style={styles.insideBox}>
                    <Image source={teamImg} style={styles.teamImg}/>

                    <Text style={styles.textPendingEvaluation}>
                    Avaliação da equipe:
                    </Text>

                    <Text style={styles.textEvaluation}>
                    É necessário avaliar os membros da sua equipe!
                    </Text>

                    <View style={styles.indications}>
                      
                        <View style= {styles.buttonsContainer}>
                        <Text style={styles.names}>Mariana Silveira </Text>
                            <RectButton onPress={handleNavigateToSkillsScreenManager} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Iniciar
                                </Text>
                            </RectButton>
                        </View>
                    </View>

                    <View style={styles.indications}>
                        <View style= {styles.buttonsContainer}>
                        <Text style={styles.names}>Fernando Assis</Text>
                            <RectButton  onPress={handleNavigateToSkillsScreenManager} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Iniciar
                                </Text>
                            </RectButton>
                        </View>
                    </View>

                    <View style={styles.indications}>
                        <View style= {styles.buttonsContainer}>
                        <Text style={styles.names}>Paulo Soares</Text>
                            <RectButton  onPress={handleNavigateToSkillsScreenManager} style={styles.buttons}>
                                <Text style={styles.textButton}>
                                    Iniciar
                                </Text>
                            </RectButton>
                        </View>
                    </View>

                </View>    
            </View>
        </ScrollView>  
    );
}
export default EvaluateTeamManager;