import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    chooseImg:{
        margin: 40,
        width: 90,
        height: 90
    },

    textMainScreen: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    buttonsContainer: {
        alignItems:'center'
    },

    buttons: {
        borderRadius: 8,
        margin: 20,
        width: 320,
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