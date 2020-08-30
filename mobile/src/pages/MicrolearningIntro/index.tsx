import React, { Component, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import PageHeader from '../../components/PageHeader';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

import rightIcon from '../../assets/images/icons/right.png';  
import videoIcon from '../../assets/images/icons/video.png';

function MicrolearningIntro() {

    useFocusEffect(() => {
        setShouldPlay(true);
        setPositionMillis(0);

        return function cleanup(){
            setShouldPlay(false);
            setPositionMillis(0);
        }
    })
    const { navigate } = useNavigation();
    const [shouldPlay, setShouldPlay] = useState(true);
    const [positionMillis, setPositionMillis] = useState(0);
    function handleNavigateToCreateAccountPage() {  
            setShouldPlay(false);
            setPositionMillis(0);   
           navigate('Registration');
    };

    return (
        <View style={styles.container}>
            <PageHeader />
            <View style={styles.insideBox}  >
                <ScrollView>
                <Image source={videoIcon} style={styles.videoIcon}/>
                <Text style={styles.labelText}> Microlearning  </Text> 
                <Text style={styles.microlearningText}>
                     {'  '}Preparamos uma breve explicação sobre as Soft Skills 
                     e sobre este aplicativo para você ficar por dentro do assunto!
                </Text> 

                <Video
                source={require('../../assets/microlearning-intro.mp4')}
                rate={1.0}
                positionMillis={positionMillis}
                volume={0.5}
                isMuted={false}
                resizeMode={Video.RESIZE_MODE_CONTAIN}
                shouldPlay= {shouldPlay}
                isLooping={false}
                useNativeControls={true}
                style={{ width:'100%', height: 180}}
                />

              
                <View style={styles.button}>
                    <BorderlessButton onPress={handleNavigateToCreateAccountPage}>
                    <Image source={rightIcon} style={styles.rightIcon}/>
                    </BorderlessButton>
                </View>
                </ScrollView>
            </View>
        </View> 
    )

}

export default MicrolearningIntro;
