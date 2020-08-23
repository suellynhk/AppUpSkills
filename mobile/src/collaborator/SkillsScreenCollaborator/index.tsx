import React from 'react';
import { Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

import chooseImg from '../../assets/images/icons/choose.png';
import { Checkbox } from 'react-native-paper';


function SkillsScreenCollaborator() {
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);

   

    return (
        <ScrollView>
            <View style={styles.container}>
                <PageHeader />
                
                <View style={styles.insideBox}>
                    <Image source={chooseImg} style={styles.chooseImg}/>
                    <Text style={styles.textMainScreen}>
                    Escolha quais Soft Skills deseja avaliar:
                    </Text>

                    <View style= {styles.checkBoxContainer}>
                        <Text style={styles.skillsTitle}>
                                Flexibilidade
                        </Text>
                        <Checkbox
                            uncheckedColor='#363636'
                            color='#4949E7'
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                            setChecked(!checked);
                            }}
                        />
                    </View>
                    
                    <View style= {styles.checkBoxContainer}>
                        <Text style={styles.skillsTitle}>
                                Resolução de problemas complexos
                        </Text>
                        <Checkbox
                            uncheckedColor='#363636'
                            color='#4949E7'
                            status={checked1 ? 'checked' : 'unchecked'}
                            onPress={() => {
                            setChecked1(!checked1);
                            }}
                        />
                    </View>

                    <View style= {styles.checkBoxContainer}>
                        <Text style={styles.skillsTitle}>
                                Inteligência emocional
                        </Text>
                        <Checkbox
                            uncheckedColor='#363636'
                            color='#4949E7'
                            status={checked2 ? 'checked' : 'unchecked'}
                            onPress={() => {
                            setChecked2(!checked2);
                            }}
                        />
                    </View>

                    <View style= {styles.checkBoxContainer}>
                        <Text style={styles.skillsTitle}>
                                Julgamento e tomada de decisão
                        </Text>
                        <Checkbox
                            uncheckedColor='#363636'
                            color='#4949E7'
                            status={checked3 ? 'checked' : 'unchecked'}
                            onPress={() => {
                            setChecked3(!checked3);
                            }}
                        />
                    </View>


                    <View style={styles.buttonContainer}>
                        <RectButton  /*onPress={}*/ style={styles.button}>
                            <Text style={styles.textButton}>
                               Iniciar
                            </Text>
                        </RectButton>
                    </View>
                    
                        
                </View>
            </View>
        </ScrollView>
    );
}
export default SkillsScreenCollaborator;



  