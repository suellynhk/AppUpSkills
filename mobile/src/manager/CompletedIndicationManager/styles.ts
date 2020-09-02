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
        alignItems: 'center',
    },

    labelText: {
        marginTop: 30,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold',
        alignSelf: 'center'
    },

    confirmationText:{
        margin: 15,
        fontSize: 15,
        fontFamily: 'Rubik_400Regular',
        textAlign: "justify"
    },

    confirmationIcon: {
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 40,
        width: 100,
        height: 100
    },

    button: {
        alignSelf: 'center',
        width: 270,
        height: 45,
        marginTop: 10,
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