import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';

import formImg from '../../assets/images/icons/form.png';

function PendingEvaluationsManager() {
    const {navigate} = useNavigation();

    function handleNavigateToSelfEvaluatonManager() {      
        navigate('SelfEvaluationManager');
    }
     /*
    function handleNavigateToEvaluateTeamManager() {      
        navigate('EvaluateTeamManager');
    }

    function handleNavigateToEvaluateColleaguesManager() {
        navigate('EvaluateColleaguesManager');
    }

    */
    return (
        <View style={styles.container}>
            <PageHeaderBack />
              
            <View style={styles.insideBox}>
               <Image source={formImg} style={styles.formImg}/>
                <Text style={styles.textPendingEvaluation}>
                   Escolha uma das opções:
                </Text>

                <View style= {styles.buttonsContainer}>
                    <RectButton  onPress={handleNavigateToSelfEvaluatonManager} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Autoavaliação
                        </Text>
                    </RectButton>

                    <RectButton /*onPress={handleNavigateToEvaluateTeamManager}*/ style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliação da sua equipe
                        </Text>
                    </RectButton>

                    <RectButton /*onPress={handleNavigateToEvaluateColleaguesManager}*/ style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliação de colegas
                        </Text>
                    </RectButton>

                </View>    
            </View>
        </View>
    );
}
export default PendingEvaluationsManager;