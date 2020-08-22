import React, { useState } from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import PageHeaderBack from '../../components/PageHeaderBack';
import {Picker} from 'native-base';

import registrationIcon from '../../assets/images/icons/registration.png';

function Registration() {
    const [selectedValue, setSelectedValue] = useState("java");
    const {navigate} = useNavigation();
    function handleFiltersSubmit() {
        navigate('ConfirmedRegistration')
    }

    return(
        <ScrollView> 
            <View style={styles.container}>
        
                <PageHeaderBack />
                <View style={styles.formCreateAccount}> 
                    <View style={styles.center}>
                        <Image source={registrationIcon} style={styles.registrationIcon}/>
                        <Text style={styles.textHeader}>
                        Realize seu cadastro:
                        </Text>
                    </View>

                    <Text style={styles.textLabel}>
                    Nome completo:
                    </Text>
                    <TextInput style={styles.input} placeholder="Sem abreviações"/>  
                    
                    <Text style={styles.textLabel}>
                    Digite seu CPF:
                    </Text>
                    <TextInput style={styles.input} placeholder="000.000.000-00"/>

                    <Text style={styles.textLabel}>
                    Possui um cargo de gestão?
                    </Text>
                    <View style={styles.pickerBox}>
                        <Picker
                            mode={'dropdown'}
                            selectedValue={selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Selecione" value=" " color="#c5c5c7"/>
                            <Picker.Item label="Sim" value="Sim" />
                            <Picker.Item label="Não" value="Não" />
                        </Picker>
                    </View> 

                    <Text style={styles.textLabel}>
                    Digite uma senha:
                    </Text>
                    <TextInput style={styles.input} secureTextEntry placeholder="Deve conter 6 dígitos"/> 

                    <Text style={styles.textLabel}>
                    Confirme a senha:
                    </Text>
                    <TextInput style={styles.input} secureTextEntry /> 

                    <View style={styles.button}>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}> Enviar </Text>
                        </RectButton>
                    </View>


            </View>
        </View>
    </ScrollView>
    )
}

export default Registration;