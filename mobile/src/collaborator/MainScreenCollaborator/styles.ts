import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    chooseImg:{
        margin: 40,
        width: 90,
        height: 90,
    },

    textMainScreen: {
        marginBottom: 20,
        fontSize: 18,
        fontFamily: 'Rubik_500Medium',
    },

    buttonsContainer: {
        width: '100%',
        alignItems:'center',
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
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'Rubik_500Medium',
    },
});

export default styles;