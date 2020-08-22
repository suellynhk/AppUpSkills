import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        marginTop: -40,
        padding: 16,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelText: {
        marginTop: 100,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    confirmationText:{
        margin: 15,
        fontSize: 18,
        fontFamily: 'Rubik_400Regular',
        textAlign: "justify"
    },

    confirmationIcon: {
        marginTop: 50,
        marginBottom: 40,
        width: 100,
        height: 100
    },

    button: {
        marginTop: 30,
        width: 300,
        height: 45,
        backgroundColor: '#4949E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    buttonText: {
        fontSize: 16,
        fontFamily: 'Rubik_500Medium',
        color: '#FFF',
    }
});

export default styles;