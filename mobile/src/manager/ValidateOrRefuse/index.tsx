import React, { useState, Component } from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, Switch } from 'react-native-gesture-handler';
import PageHeaderBack from '../../components/PageHeaderBack';

import styles from './styles';

import validationImg from '../../assets/images/icons/validation.png';

interface PessoaIndicada{
    id: number,
    nome: string,
    indicada: boolean
}

function ValidateOrRefuse() {

    const [isEnabled, setIsEnabled] = useState(false);
    const [pessoasSelecionadas, setPessoasSelecionadas] = useState(new Array<PessoaIndicada>());

    setPessoasSelecionadas([
        {
            id: 1,
            nome: 'José',
            indicada: false
        },
        {
            id: 2,
            nome: 'João',
            indicada: false
        },
        {
            id: 3,
            nome: 'Maria',
            indicada: false
        }
    ]);

    const toggleSwitch = (pessoaId: number) => {
        let pessoas = [...pessoasSelecionadas];
        setPessoasSelecionadas(
            pessoasSelecionadas.map((el) => {
                if (el.id === pessoaId) {
                    el.indicada = !el.indicada;
                    return el;
                }
                return el;
            })
          );
    }


    const { navigate } = useNavigation();
    function handleNavigateToValidatedIndication() {
        navigate('ValidatedIndication');
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

                        {pessoasSelecionadas.map((pessoa: PessoaIndicada) => {
                            return (
                            <View key={pessoa.id}>
                                <Text key={pessoa.id} style={styles.name}>{pessoa.nome} indicou:</Text>
                                <View key={pessoa.id} style= {styles.box}>
                                    <Text key={pessoa.id} style={styles.nameIndicated}>Pessoa Indicada</Text>
                                    <Text  key={pessoa.id}>{!pessoa.indicada ? ' ' : 'Validar'}</Text>
                                    <Switch 
                                        key={pessoa.id}
                                        style={styles.switches}
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={!pessoa.indicada ? "#3e3e3e" : "#4949E7"}
                                        ios_backgroundColor="#3e3e3e"
                                        // onValueChange={() => toggleSwitch(pessoa.id)}
                                        value={pessoa.indicada}
                                    />
                                </View>
                            </View>
                        )})}
{/*                         
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Pessoa Indicada</Text>
                            <Text >{!isEnabled ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View> 
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Pessoa Indicada</Text>
                            <Text >{!isEnabled ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    
                        <Text style={styles.name}>Maria indicou:</Text>      
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Pessoa Indicada</Text>
                            <Text >{!isEnabled ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}  
                            />
                        </View>                         
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Pessoa Indicada</Text>
                            <Text >{!isEnabled ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>

                        <Text style={styles.name}>José indicou:</Text>       
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Pessoa Indicada</Text>
                            <Text >{!isEnabled ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                        <View style= {styles.box}>
                            <Text style={styles.nameIndicated}>Pessoa Indicada</Text>
                            <Text >{!isEnabled ? ' ' : 'Validar'}</Text>
                            <Switch 
                                style={styles.switches}
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={!isEnabled ? "#3e3e3e" : "#4949E7"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                                  */}
                        <View style={styles.buttonsContainer}>
                            <RectButton onPress={handleNavigateToValidatedIndication} style={styles.button}>
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