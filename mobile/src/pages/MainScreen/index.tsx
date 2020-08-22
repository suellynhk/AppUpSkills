import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

import chooseImg from '../../assets/images/icons/choose.png';


function MainScreen() {
   const {navigate} = useNavigation();

    function handleNavigateToEvaluations() {      
        navigate('PendingEvaluations');
    }
     
    function handleNavigateToIndication() {      
        navigate('IndicateSomeone');
    }

    function handleNavigateToValidations() {
        navigate('ValidateOrRefuse');
    }

    function handleNavigateToDashboard() {      
        navigate('Dashboard');
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
                    <RectButton onPress={handleNavigateToEvaluations} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Avaliações pendentes
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToIndication} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Indicar alguém para te avaliar
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToValidations} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Validar/Recusar indicações
                        </Text>
                    </RectButton>

                    <RectButton onPress={handleNavigateToDashboard} style={styles.buttons}>
                        <Text style={styles.textButton}>
                            Dashboard e Microlearning
                        </Text>
                    </RectButton>

                </View>    
            </View>
        </View>
    );
}
export default MainScreen;



  