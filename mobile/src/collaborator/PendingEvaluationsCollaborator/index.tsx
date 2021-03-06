import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';

import formImg from '../../assets/images/icons/form.png';

function PendingEvaluationsCollaborator() {
    const {navigate} = useNavigation();

    function handleNavigateToSelfEvaluatonCollaborator() {      
        navigate('SelfEvaluationCollaborator');
    }

    function handleNavigateToEvaluateColleaguesCollaborator() {
        navigate('EvaluateColleaguesCollaborator');
    }

    function handleNavigateToEvaluateIndicationsManager() {
        navigate('EvaluateIndicationsManager2')
    }

    return (
        <View style={styles.container}>
            <PageHeaderBack />
              
            <View style={styles.insideBox}>
            <ScrollView>
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

                    <RectButton onPress={handleNavigateToEvaluateIndicationsManager}style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliação do seu gestor
                        </Text>
                    </RectButton>

                </View>  
                </ScrollView>  
            </View>
        </View>
    );
}
export default PendingEvaluationsCollaborator;