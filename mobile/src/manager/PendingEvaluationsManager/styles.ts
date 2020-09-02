import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        flex: 1,
        marginTop: -40,
        borderRadius: 20,
        padding: 30,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    formImg:{
        alignSelf:'center',
        marginBottom: 20,
        width: 90,
        height: 90
    },

    textPendingEvaluation: {
        alignSelf:'center',
        marginBottom: 20,
        fontSize: 18,
        fontFamily: 'Rubik_500Medium'
    },

    buttonsContainer: {
        alignItems:'center',
        width: '100%',
    },

    buttons: {
        padding: 20,
        borderRadius: 8,
        margin: 20,
        width: '100%',
        height: 45,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    textButton: {
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'Rubik_500Medium'
    },
});

export default styles;