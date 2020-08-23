import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

import chooseImg from '../../assets/images/icons/choose.png';


function MainScreenCollaborator
() {
   const {navigate} = useNavigation();

    function handleNavigateToEvaluationsCollaborator
    () {      
        navigate('PendingEvaluationsCollaborator');
    }
     
    function handleNavigateToIndicationCollaborator
    () {      
        navigate('IndicateSomeoneCollaborator');
    }

    function handleNavigateToDashboardCollaborator
    () {      
        navigate('DashboardCollaborator');
    }


    return (
        <View style={styles.container}>
            <PageHeader />
              
            <View style={styles.insideBox}>
               <Image source={chooseImg} style={styles.chooseImg}/>
                <Text style={styles.textMainScreen}>
                   Escolha uma das opções:
                </Text>

                <View style= {styles.buttonsContainer}>
                    <RectButton onPress={handleNavigateToEvaluationsCollaborator} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliações pendentes
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToIndicationCollaborator} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Indicar alguém para te avaliar
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToDashboardCollaborator}style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Dashboard e Microlearning
                        </Text>
                    </RectButton>

                </View>    
            </View>
        </View>
    );
}

export default MainScreenCollaborator;



  