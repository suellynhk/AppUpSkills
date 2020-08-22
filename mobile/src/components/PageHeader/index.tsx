import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


function PageHeader() {

    return(
        <View style={styles.container}> 
            <Text style={styles.textHeader}>
                Up {'\n'} Skills
            </Text>
        </View>
    )
}

export default PageHeader;
