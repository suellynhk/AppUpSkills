import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    loginForm:{
        flex: 1,
        marginTop: -40,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },

    loginIconBox:{
        marginTop: 50,
        alignItems: 'center'
    },

    loginIcon: {
        alignSelf: 'center',
        width: 90,
        height: 90
    },

    textHeader: {
        fontSize: 18,
        marginTop: 30,
        marginBottom: 20,
        fontFamily: 'Rubik_500Medium'
    },

    textLabel: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 20,
        fontFamily: 'Rubik_400Regular'
    },

    input: {
        paddingLeft: 10,
        width: '100%',
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        fontFamily: 'Rubik_400Regular'
    },

    button:{
        marginTop: 15,
        alignItems: 'flex-end',
        marginBottom: 30,
    },

    submitButton: {
        marginTop: 35,
        width: 155,
        height: 45,
        backgroundColor:'#4949E7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    submitButtonText: {
        fontSize: 16,
        fontFamily: 'Rubik_700Bold',
        color: '#FFF'
    },

    textToRegistration: {
        marginTop: 15,
        fontSize: 11,
        fontFamily: 'Rubik_400Regular',
        textDecorationLine: 'underline'
    },
});

export default styles;