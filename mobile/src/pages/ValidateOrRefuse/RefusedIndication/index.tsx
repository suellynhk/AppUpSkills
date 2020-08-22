import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';
import PageHeader from '../../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

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
              
                <Image source={refusedIcon} style={styles.refusedIcon}/>
                <Text style={styles.labelText}> Você recusou algumas indicações! </Text> 
                <Text style={styles.refusedText}>
                    {"   "}É preciso indicar outra pessoa para avaliar:
                </Text> 

                <View>
                    <Text style={styles.textLabel}>
                    Maria:
                    </Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.buttonBox}>
                    <RectButton onPress={handleNavigateToValidatedIndication} style={styles.button} >
                    <Text style={styles.buttonText}> Enviar </Text> 
                    </RectButton>
                </View>
            </View>
        </View> 
    )

}

export default RefusedIndication;