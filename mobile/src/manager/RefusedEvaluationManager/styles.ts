import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{ 
        flex: 1,
        marginTop: -40,
        padding: 35,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    labelText: {
        marginBottom: 30,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold',
    },

    confirmationText:{
        fontSize: 18,
        fontFamily: 'Rubik_400Regular',
        textAlign: "justify"
    },

    informationIcon: {
        alignSelf: 'center',
        marginBottom: 40,
        width: 90,
        height: 90
    },

    input: {
        marginTop: 10,
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        backgroundColor: '#FFF',
        fontFamily: 'Rubik_400Regular'
    },

    buttonAlign:{
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    button: {
        marginTop: 30,
        width: 155,
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