import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';


function Landing() {
    const {navigate} = useNavigation();
    
    function handleNavigateToLoginPage() {      
        navigate('Login');
    }

    function handleNavigateToMicrolearningIntroPage() {      
        navigate('MicrolearningIntro');
    }

    return (
                
        <View style={styles.container}>
            
                <View style={styles.insideBox}>
                    <View style={styles.header}>
                        <Text style={styles.textHeader}>
                            Up {'\n'} Skills
                        </Text>
                    </View>

                    <Image source={landingImg} style={styles.landingImg}/>

                    <Text style={styles.landingText}>
                        Olá! {'\n'}
                        Seja bem-vindo(a) à nossa {'\n'}
                        plataforma de avaliação de {'\n'}
                        Soft Skills!
                    </Text>

                    <Text style={styles.landingQuestion}>
                        É a sua primeira vez aqui?
                    </Text>

                    <View style= {styles.buttonsContainer}>
                        <RectButton onPress={handleNavigateToMicrolearningIntroPage} style={styles.yesButton}>
                            <Text style={styles.textButton}>
                                Sim
                            </Text>
                        </RectButton>

                        <RectButton onPress={handleNavigateToLoginPage} style={styles.noButton}>
                            <Text style={styles.textButton}>
                                Não
                            </Text>
                        </RectButton>
                    </View>
                </View>   
        </View>
    );   
}

export default Landing;



  