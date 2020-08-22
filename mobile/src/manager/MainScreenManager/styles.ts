import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        marginTop: -40,
        borderRadius: 20,
        padding: 35,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    chooseImg:{
        marginBottom: 30,
        width: 90,
        height: 90
    },

    textMainScreen: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    buttonsContainer: {
        width: '100%',
        alignItems:'center'
    },

    buttons: {
        borderRadius: 8,
        marginBottom: 30,
        width: '100%',
        height: 45,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    textButton: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'Rubik_500Medium'
    },
});

export default styles;