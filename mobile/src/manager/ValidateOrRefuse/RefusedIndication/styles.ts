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

    labelText: {
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'Rubik_700Bold'
    },

    refusedText:{
        margin: 15,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        textAlign: "justify"
    },

    refusedIcon: {
        marginTop: 30,
        width: 90,
        height: 90
    },

    textLabel: {
        fontSize: 16,
        marginTop: 15,
        marginBottom: 5,
        fontFamily: 'Rubik_400Regular',
    },

    input: {
        paddingLeft: 10,
        width: 340,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        fontFamily: 'Rubik_400Regular'
    },

    buttonBox: {
        width: 340,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    button: {
        marginTop: 40,
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