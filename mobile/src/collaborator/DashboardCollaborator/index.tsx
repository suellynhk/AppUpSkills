import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import PageHeaderBack from '../../components/PageHeaderBack';
import dashboardIcon from '../../assets/images/icons/dashboard.png';

import styles from './styles';
import CarrosselColaborator from '../../components/CarrosselCollaborator';


function DashboardCollaborator() {
    return (
            <View style={styles.container}>
                <PageHeaderBack/>
               
                <View style={styles.insideBox}>
                <ScrollView>
                    <Text style={styles.labelText}> Dashboard </Text>
                    <View style={styles.carouselContainer}>
                        <CarrosselColaborator/>
                    </View>
                </ScrollView>
                </View>
            </View>
    );
}

export default DashboardCollaborator;