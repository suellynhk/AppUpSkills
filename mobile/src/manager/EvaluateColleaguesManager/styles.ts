import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{
        marginTop: -40,
        marginBottom: 100,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textEvaluation:{
        marginTop: 10,
        fontSize: 15,
        fontFamily: 'Rubik_400Regular'

    },

    indications:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    names: {
        marginTop: 20,
        fontSize: 15,
        fontFamily: 'Rubik_500Medium'
    },

    colleaguesImg:{
        marginBottom: 20,
        width: 90,
        height: 90
    },

    textPendingEvaluation: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    buttonsContainer: {
  
        width: '65%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttons: {
        borderRadius: 8,
        marginTop: 15,
        width: 100,
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