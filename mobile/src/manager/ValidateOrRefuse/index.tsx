import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, Switch } from 'react-native-gesture-handler';
import PageHeaderBack from '../../components/PageHeaderBack';

import styles from './styles';

import validationImg from '../../assets/images/icons/validation.png';


const ValidateOrRefuse = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
  
    const toggleSwitch = () => {  
        setIsEnabled(previousState => !previousState)
    }
        

    const toggleSwitch1 = () => {
        setIsEnabled1(previousState1 => !previousState1)
    }

    const toggleSwitch2 = () => {
        setIsEnabled2(previousState2 => !previousState2)
    }

    const toggleSwitch3 = () => {
        setIsEnabled3(previousState3 => !previousState3)
    }

    const { navigate } = useNavigation();

    const validationButton = () => {
        if (isEnabled && isEnabled1 && isEnabled2 && isEnabled3) {
            navigate('ValidatedIndication');
        }else {
            navigate('RefusedIndication');
        }
    }

    return (
        <View style={styles.container}>
            <PageHeaderBack />

            <View style={styles.insideBox}>
                <ScrollView >
                    <View style={styles.anotherBox}>
                        <Image source={validationImg} style={styles.validationImg}/>
                        <Text style={styles.textHeader}>
                        Validar ou Recusar indicações:
                        </Text>
                        <Text style={styles.textValidation}>
                            {"   "}Aqui você pode verificar os colaboradores que seu funcionário 
                        indicou para avaliá-lo.{'\n'}
                        </Text>
                    </View>
                    <View style= {styles.switchContainer}>
                    <Text style={styles.name}>Joana indicou:</Text> 

                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Diogo Nascimento</Text>
                            <View style= {styles.switchBox}>
                            <Text >{!isEnabled? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            </View>
                        </View> 
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Eduardo Lima</Text>
                            <View style= {styles.switchBox}>
                            <Text >{!isEnabled1 ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled1 ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch1}
                                value={isEnabled1}
                            />
                            </View>
                        </View> 
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Ana Rodrigues</Text>
                            <View style= {styles.switchBox}>
                            <Text >{!isEnabled2 ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled2 ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch2}
                                value={isEnabled2}
                            />
                            </View>
                        </View>
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Camila Araújo</Text>
                            <View style= {styles.switchBox}>
                            <Text >{!isEnabled3 ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled3 ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch3}
                                value={isEnabled3}  
                            />
                            </View>
                        </View>                                   
                        <View style={styles.buttonsContainer}>
                            <RectButton onPress={validationButton} style={styles.button}>
                                <Text style={styles.textButton}>
                                    Enviar
                                </Text>
                            </RectButton>
                        </View>
                    </View>
                </ScrollView>  
            </View> 
        </View>
    );
}
export default ValidateOrRefuse;