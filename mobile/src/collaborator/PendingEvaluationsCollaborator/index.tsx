import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';

import formImg from '../../assets/images/icons/form.png';
import SkillsScreenManagerS from '../../manager/SkillsScreenManagerS';

function PendingEvaluationsCollaborator() {
    const {navigate} = useNavigation();

    function handleNavigateToSelfEvaluatonCollaborator() {      
        navigate('SelfEvaluationCollaborator');
    }

    function handleNavigateToEvaluateColleaguesCollaborator() {
        navigate('EvaluateColleaguesCollaborator');
    }

    function handleNavigateToEvaluateTheManager() {
        navigate('SkillsScreenManagerS')
    }

    return (
        <View style={styles.container}>
            <PageHeaderBack />
              
            <View style={styles.insideBox}>
               <Image source={formImg} style={styles.formImg}/>
                <Text style={styles.textPendingEvaluation}>
                   Escolha uma das opções:
                </Text>

                <View style= {styles.buttonsContainer}>
                    <RectButton  onPress={handleNavigateToSelfEvaluatonCollaborator} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Autoavaliação
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToEvaluateColleaguesCollaborator}style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliação de colegas
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToEvaluateTheManager}style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliação do seu Gestor
                        </Text>
                    </RectButton>

                </View>    
            </View>
        </View>
    );
}
export default PendingEvaluationsCollaborator;