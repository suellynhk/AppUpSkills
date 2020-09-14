import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Video } from 'expo-av';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { ScrollView, RectButton } from 'react-native-gesture-handler';
import styles from './styles';
 
import videoIcon from '../../../assets/images/icons/video.png';
import PageHeader from '../../../components/PageHeader';


function MicrolearningComplexProblemsCollaborator() {

    const { navigate } = useNavigation();
    const [shouldPlay, setShouldPlay] = useState(true);
    const [positionMillis, setPositionMillis] = useState(0);
    function handleNavigateToDashboardCollaborator() {  
            setShouldPlay(false);
            setPositionMillis(0);   
           navigate('DashboardCollaborator');
    };

    return (
        <View style={styles.container}>
            <PageHeader />
            <View style={styles.insideBox}  >
                <ScrollView>
                <View style={styles.alignBox}>
                <Image source={videoIcon} style={styles.videoIcon}/>
                <Text style={styles.labelText}> Resolução de problemas complexos  </Text> 
                <Text style={styles.microlearningText}>
                     {'  '}Texto...
                </Text> 

                <Video
                source={require('../../../assets/microlearning-intro.mp4')}
                rate={1.0}
                positionMillis={positionMillis}
                volume={0.5}
                resizeMode={Video.RESIZE_MODE_CONTAIN}
                shouldPlay= {shouldPlay}
                isLooping={false}
                useNativeControls={true}
                style={{ width:'100%', height: 180}}
                />

              
              
                    <RectButton onPress={handleNavigateToDashboardCollaborator} style={styles.rectButton}>
                        <Text style={styles.textButton}>Voltar para Dashboard</Text>
                    </RectButton>
          
                </View>
                </ScrollView>
            </View>
        </View> 
    )

}

export default MicrolearningComplexProblemsCollaborator;
