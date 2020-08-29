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
        padding: 35,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelText: {
        marginTop: 20,
        fontSize: 17,
        fontFamily: 'Rubik_700Bold',
        textAlign: 'center'
    },

    refusedText:{
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        textAlign: "justify"
    },

    refusedIcon: {
        alignSelf: 'center',
        width: 90,
        height: 90
    },

    textLabel: {
        fontSize: 16,
        marginTop: 20,
        fontFamily: 'Rubik_500Medium',

    },

    input: {
        width: '100%',
        height: 40,
        marginTop: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        fontFamily: 'Rubik_400Regular'
    },

    buttonBox: {
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    button: {
        marginTop: 35,
        marginBottom: 40,
        width: 150,
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