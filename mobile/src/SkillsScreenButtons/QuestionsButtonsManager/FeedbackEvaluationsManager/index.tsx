import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PageHeader from '../../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import feedbackIcon from '../../../assets/images/icons/feedback.png';
import { TextInput } from 'react-native-paper';

function FeedbackEvaluationsManager() {
    const { navigate } = useNavigation();
    function handleNavigateToEvaluateIndicationsManager() {      
        navigate('PendingEvaluationsManager');
    }

    return (
        <ScrollView >
            <View style={styles.container}>
                <PageHeader />

                <View style={styles.insideBox}>
                    <Text style={styles.labelText}> Já estamos acabando... </Text> 
                    <Image source={feedbackIcon} style={styles.feedbackIcon}/>
                    <Text style={styles.confirmationText}>
                        Deixe um feedback para ajudar no desenvolvimento:
                    </Text> 
                    <TextInput multiline={true} numberOfLines={8} style={styles.input} placeholder="Digite aqui..."/> 
                   
                    <View style={styles.buttonAlign}>
                        <RectButton onPress={handleNavigateToEvaluateIndicationsManager} style={styles.button} >
                         <Text style={styles.buttonText}> Enviar </Text> 
                        </RectButton>
                    </View>
                </View>
            </View>
        </ScrollView>
    )

}

export default FeedbackEvaluationsManager;