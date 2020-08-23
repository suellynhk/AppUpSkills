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
    
    selfIcon: {
        marginTop: 30,
        width: 90,
        height: 90
    },

    smileysImg:{
        marginRight: 10,
        marginBottom: 10,
        width: 30,
        height: 30,
    },

    textLabel: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    textEvaluation: {
        marginRight: 30,
        marginLeft: 30,
        marginTop: 15,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        textAlign: 'justify'
    },

    example: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    textExample: {
        fontSize: 15,
        fontFamily: 'Rubik_400Regular',
        textAlign: 'justify'
    },

    buttonContainer: {
        width: 360,
        alignItems:'flex-end',
        justifyContent: 'flex-end'
    },

    button: {
        width: 200,
        position: 'relative',
        borderRadius: 8,
        marginTop: 25,
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