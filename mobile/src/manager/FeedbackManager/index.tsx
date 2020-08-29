import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import feedbackIcon from '../../assets/images/icons/feedback.png';
import { TextInput } from 'react-native-paper';

function FeedbackManager() {
    const { navigate } = useNavigation();
    function handleNavigateToCompletedQuestionnaireManager() {      
        navigate('CompletedQuestionnaireManager');
    }

    return (
      
            <View style={styles.container}>
                <PageHeader />
                
                <View style={styles.insideBox}>
                <ScrollView >
                    <Text style={styles.labelText}> Já estamos acabando... </Text> 
                    <Image source={feedbackIcon} style={styles.feedbackIcon}/>
                    <Text style={styles.confirmationText}>
                        Deixe um feedback para ajudar no desenvolvimento:
                    </Text> 
                    <TextInput multiline={true} numberOfLines={8} style={styles.input} placeholder="Digite aqui..."/> 
                   
                    <View style={styles.buttonAlign}>
                        <RectButton onPress={handleNavigateToCompletedQuestionnaireManager} style={styles.button} >
                         <Text style={styles.buttonText}> Enviar </Text> 
                        </RectButton>
                    </View>
                </ScrollView>
                </View>
            </View>
       
    )

}

export default FeedbackManager;