import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';
import PageHeader from '../../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import refusedIcon from '../../../assets/images/alerta.png';

function RefusedIndication() {

    const { navigate } = useNavigation();
    function handleNavigateToValidatedIndication() {      
        navigate('ValidatedIndication');
    }

    return (
        <View style={styles.container}>
            <PageHeader />

            <View style={styles.insideBox}>
            <ScrollView >
                <Image source={refusedIcon} style={styles.refusedIcon}/>
                <Text style={styles.labelText}> Você recusou algumas indicações! </Text> 
                <Text style={styles.refusedText}>
                    {"   "}É preciso indicar outras pessoas no lugar das pessoas 
                    não validadas para realizar a avaliação de:
                </Text> 

                    <Text style={styles.textLabel}>
                    Joana Costa:
                    </Text>
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />
                    <TextInput style={styles.input} />

                <View style={styles.buttonBox}>
                    <RectButton onPress={handleNavigateToValidatedIndication} style={styles.button} >
                    <Text style={styles.buttonText}> Enviar </Text> 
                    </RectButton>
                </View>
            </ScrollView>
            </View>
        </View> 
        
    )

}

export default RefusedIndication;