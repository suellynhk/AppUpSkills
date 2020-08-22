import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    loginForm:{
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },

    loginIconBox:{
        marginTop: 50,
        alignItems: 'center'
    },

    loginIcon: {
        width: 90,
        height: 90
    },

    textHeader: {
        fontSize: 20,
        marginTop: 30,
        marginBottom: 20,
        fontFamily: 'Rubik_700Bold'
    },

    textLabel: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 20,
        marginLeft: 30,
        fontFamily: 'Rubik_400Regular'
    },

    input: {
        marginLeft: 30,
        paddingLeft: 10,
        width: 340,
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        fontFamily: 'Rubik_400Regular'
    },

    button:{
        margin: 20,
        alignItems: 'flex-end'
    },

    submitButton: {
        marginRight: 20,
        marginTop: 35,
        width: 200,
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
    }
});

export default styles;