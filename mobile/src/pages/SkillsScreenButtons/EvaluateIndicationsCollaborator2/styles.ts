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
        padding: 40,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    chooseImg:{
        alignSelf: 'center', 
        marginBottom: 30,
        width: 90,
        height: 90
    },

    textMainScreen: {
        marginBottom: 20,
        fontSize: 18,
        fontFamily: 'Rubik_500Medium'
    },

    buttonContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10,
        height: 45,
        width: '100%',
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton:{
        fontSize: 15,
        fontFamily: 'Rubik_500Medium',
        alignItems: 'flex-end',
        color:'#FFF'
    },

});

export default styles;