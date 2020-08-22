import React from 'react';
import { View, Image, Text } from 'react-native';
import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function PageHeaderBack() {
    const { goBack } = useNavigation();

    function handleGoBack() {
        goBack();
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.textHeader}>
                Up {'\n'} Skills
            </Text>

            <BorderlessButton onPress={handleGoBack} style={styles.backIcon}>
            <Image source={backIcon} style={styles.backIconImg}/>
            </BorderlessButton>
        </View>
    )
}

export default PageHeaderBack;
