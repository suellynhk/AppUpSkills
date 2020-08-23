import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{ 
        marginTop: -40,
        padding: 25,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 740,
    },

    labelText: {
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    confirmationText:{
        margin: 15,
        fontSize: 16,
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
        width: 270,
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