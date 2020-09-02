import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

import chooseImg from '../../assets/images/icons/choose.png';


function MainScreenManager() {
   const {navigate} = useNavigation();

    function handleNavigateToEvaluationsManager() {      
        navigate('PendingEvaluationsManager');
    }
     
    function handleNavigateToIndicationManager() {      
        navigate('IndicateSomeoneManager');
    }

    function handleNavigateToValidationsManager() {
        navigate('ValidateOrRefuse');
    }

    function handleNavigateToDashboardManager() {      
        navigate('DashboardManager');
    }

    return (
        <View style={styles.container}>
            <PageHeader />
              
            <View style={styles.insideBox}>
                <ScrollView>
               <Image source={chooseImg} style={styles.chooseImg}/>
                <Text style={styles.textMainScreen}>
                   Escolha uma das opções:
                </Text>

                <View style= {styles.buttonsContainer}>
                    <RectButton onPress={handleNavigateToEvaluationsManager} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliações pendentes
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToIndicationManager} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Indicar alguém para te avaliar
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToValidationsManager} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Validar/Recusar indicações
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToDashboardManager} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Dashboard
                        </Text>
                    </RectButton>

                </View>   
                </ScrollView> 
            </View>
        </View>
    );
}
export default MainScreenManager;



  