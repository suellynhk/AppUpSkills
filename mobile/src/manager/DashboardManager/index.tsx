import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import PageHeaderBack from '../../components/PageHeaderBack';
import dashboardIcon from '../../assets/images/icons/dashboard.png';

import styles from './styles';
import Carrossel from '../../components/Carrossel';


function DashboardManager() {
    return (
            <View style={styles.container}>
                <PageHeaderBack/>
               
                <View style={styles.insideBox}>
                <ScrollView>
                    <Image  source={dashboardIcon} style={styles.dashboardIcon}/>
                    <Text style={styles.labelText}> Dashboard </Text>
                    <View style={styles.carouselContainer}>
                        <Carrossel/>
                    </View>
                </ScrollView>
                </View>
            </View>
    );
}

export default DashboardManager;