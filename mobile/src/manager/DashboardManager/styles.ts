import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{
        flex: 1,
        marginTop: -40,
        padding: 25,
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        },

    dashboardIcon: {
        alignSelf:'center',
        marginBottom: 20,
        width: 90,
        height: 90,
    },

    labelText: {
        alignSelf:'center',
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold',
    },

    carouselContainer:{
        width: '100%'
    },
   
});

export default styles;