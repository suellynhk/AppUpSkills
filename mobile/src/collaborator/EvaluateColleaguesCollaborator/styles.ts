import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{
        flex: 1,
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
        marginTop: 30,
        fontSize: 15,
        fontFamily: 'Rubik_500Medium'
    },

    colleaguesImg:{
        alignSelf: 'center',
        marginBottom: 40,
        width: 90,
        height: 90
    },

    textPendingEvaluation: {
        alignSelf: 'center',
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    buttonsContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttons: {
        borderRadius: 8,
        marginTop: 15,
        width: 90,
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