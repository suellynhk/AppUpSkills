import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView} from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';
import informationIcon from '../../assets/images/icons/information.png';
import { TextInput } from 'react-native-paper';

function RefusedEvaluationCollaborator() {
    const {navigate} = useNavigation();
  
    function handleNavigateToEvaluateColleaguesCollaborator() {      
        navigate('EvaluateColleaguesCollaborator');
    }

    return (
       
            <View style={styles.container}>
                <PageHeaderBack />
                
                <View style={styles.insideBox}>
                <ScrollView >
                    <Image source={informationIcon} style={styles.informationIcon}/>
                    <Text style={styles.labelText}> Avaliação de colaboradores: </Text> 
                   
                    <Text style={styles.confirmationText}>
                        Descreva o motivo pelo qual deseja não realizar a avaliação:
                    </Text> 
                    <TextInput multiline={true} numberOfLines={8} placeholder="Digite aqui..." style={styles.input} /> 
                   
                    <View style={styles.buttonAlign}>
                        <RectButton onPress={handleNavigateToEvaluateColleaguesCollaborator} style={styles.button} >
                         <Text style={styles.buttonText}> Enviar </Text> 
                        </RectButton>
                    </View>
                </ScrollView>  
                </View>
            </View>
       
    );
}
export default RefusedEvaluationCollaborator;