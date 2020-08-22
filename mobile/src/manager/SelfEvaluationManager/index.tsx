import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';

import selfIcon from '../../assets/images/icons/self-evaluation.png';
import uauImg from '../../assets/images/uau.png';
import muitoBomImg from '../../assets/images/muito-bom.png';
import podeMelhorarImg from '../../assets/images/pode-melhorar.png';
import deuRuimImg from '../../assets/images/deu-ruim.png';


function SelfEvaluationManager() {
    const {navigate} = useNavigation();
    function handleNavigateToFlexibilityManager() {
        navigate('FlexibilityManager');
    }
    
    return (
        <View style={styles.container}>
            <PageHeaderBack />
              
            <View style={styles.insideBox}>
                <Image source={selfIcon} style={styles.selfIcon}/>
                <Text style={styles.textLabel}>
                  Autoavaliação das Soft Skills:
                </Text>

                <Text style={styles.textEvaluation}>
                    {'  '}É recomendado que você se autoavalie em todas as Soft Skills...
                   {"\n"}{"\n"}
                   1. Para responder a avaliação reserve um tempo e se dedique 
                   nas respostas.
                   {"\n"}{"\n"}
                    2. Cada soft skill (competência) haverá cerca de 3 comportamentos, 
                    avalie cada comportamento de acordo com a frequência que é percebida por você 
                    no dia a dia, como: {"\n"}
                </Text>

                
                <View style={styles.example}>
                    <Image source={uauImg} style={styles.smileysImg}/>
                    <Text style={styles.textExample}>Uau (sempre)</Text>
                </View>
                <View style={styles.example}>
                    <Image source={muitoBomImg} style={styles.smileysImg}/>   
                    <Text style={styles.textExample}>Muito bom (frequente)</Text>
                </View>
                <View style={styles.example}>
                    <Image source={podeMelhorarImg} style={styles.smileysImg}/>
                    <Text style={styles.textExample}>Pode melhorar (às vezes)</Text>
                </View>
                <View style={styles.example}>
                    <Image source={deuRuimImg} style={styles.smileysImg}/>
                    <Text style={styles.textExample}>Deu ruim (nunca)</Text>
                </View>  


                <View style= {styles.buttonContainer}>
                    <RectButton onPress={handleNavigateToFlexibilityManager} style={styles.button}>
                        <Text style={styles.textButton}>
                            Iniciar 
                        </Text>
                    </RectButton>
                </View> 
            </View>
        </View>
    );
}
export default SelfEvaluationManager;