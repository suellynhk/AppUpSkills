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
        fontSize: 18,
        fontFamily: 'Rubik_400Regular'

    },

    indications:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    names: {
        alignItems: 'flex-start',
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Rubik_500Medium'
    },

    teamImg:{
        marginBottom: 20,
        width: 100,
        height: 100
    },

    textPendingEvaluation: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    buttonsContainer: {
        marginTop: 20, 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    buttons: {
        borderRadius: 8,
        width: 90,
        height: 40,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    textButton: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'Rubik_500Medium',
    },
});

export default styles;