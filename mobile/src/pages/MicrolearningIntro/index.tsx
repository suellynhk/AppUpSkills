import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Video } from 'expo-av';
import PageHeader from '../../components/PageHeader';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles';

import rightIcon from '../../assets/images/icons/right.png';  
import videoIcon from '../../assets/images/icons/video.png';


function MicrolearningIntro() {
    const { navigate } = useNavigation();
    function handleNavigateToCreateAccountPage() {      
           navigate('Registration');
    };

    return (
        <View style={styles.container}>
            <PageHeader />
            <View style={styles.insideBox}  >
                <Image source={videoIcon} style={styles.videoIcon}/>
                <Text style={styles.labelText}> Microlearning  </Text> 
                <Text style={styles.microlearningText}>
                     {'  '}Preparamos uma breve explicação sobre as Soft Skills 
                     e sobre este aplicativo para você ficar por dentro do assunto!
                </Text> 
               
                <Video
                source={require('../../assets/microlearning-intro.mp4')}
                rate={1.0}
                volume={1.0}
                isMuted={false} 
                resizeMode={Video.RESIZE_MODE_CONTAIN}
                shouldPlay={true}
                isLooping={false}
                useNativeControls={true}
                style={{ width: 350, height:190 }}
                />

                <View style={styles.button}>
                    <BorderlessButton onPress={handleNavigateToCreateAccountPage}>
                    <Image source={rightIcon} style={styles.rightIcon}/>
                    </BorderlessButton>
                </View>
            </View>
        </View> 
    )

}

export default MicrolearningIntro;
