import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{
        flex: 1,
        marginTop: -40,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxAlign:{
        width: '100%',
    },

    textEvaluation:{
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'Rubik_400Regular'

    },

    indications: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    names: {
        fontSize: 16,
        fontFamily: 'Rubik_500Medium'
    },

    teamImg:{
        alignSelf: 'center',
        marginBottom: 30,
        width: 100,
        height: 100
    },

    textPendingEvaluation: {
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    buttonsContainer: {
        height: 50,
        width: 300,
        marginTop: 20, 
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