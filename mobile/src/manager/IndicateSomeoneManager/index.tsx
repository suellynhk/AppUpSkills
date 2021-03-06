import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeaderBack from '../../components/PageHeaderBack';

import colleaguesIcon from '../../assets/images/icons/colleagues.png';

function IndicateSomeoneManager() {
    const { navigate } = useNavigation();
    function handleToCompletedIndicationManager() {
        navigate('CompletedIndicationManager');
    }
   
    return (
       
            <View style={styles.container}>
            <PageHeaderBack />
                    <View style={styles.indication}> 
                    <ScrollView > 
                        <View style={styles.center}>
                            <Image source={colleaguesIcon} style={styles.colleaguesIcon}/>
                            <Text style={styles.textHeader}>
                            Indique 4 colaboradores que possam te avaliar:
                            </Text>
                           
                        </View>
                        <View>
                            <Text style={styles.textLabel}>
                            Colaborador 1:
                            </Text>
                            <TextInput style={styles.input} textContentType='name'/> 

                            <Text style={styles.textLabel}>
                            Colaborador 2:
                            </Text>
                            <TextInput style={styles.input} textContentType='name'/>

                            <Text style={styles.textLabel}>
                            Colaborador 3:
                            </Text>
                            <TextInput style={styles.input} textContentType='name'/> 

                            <Text style={styles.textLabel}>
                            Colaborador 4:
                            </Text>
                            <TextInput style={styles.input} textContentType='name'/>
                        </View>

                        <View style={styles.button}>
                            <RectButton style={styles.submitButton} onPress={handleToCompletedIndicationManager}>  
                            <Text style={styles.submitButtonText}> Enviar </Text>
                            </RectButton>
                        </View> 
                    </ScrollView>           
                    </View>            
            </View>
    
    );
}

export default IndicateSomeoneManager;