import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{ 
        flex: 1,
        marginTop: -40,
        padding: 25,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    labelText: {
        alignSelf:'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    confirmationText:{
        fontSize: 15,
        fontFamily: 'Rubik_400Regular',
        textAlign: "center"
    },

    confirmationIcon: {
        alignSelf:'center',
        marginTop: 20,
        marginBottom: 20,
        width: 90,
        height: 90
    },

    button: {
        alignSelf:'center',
        marginTop: 30,
        width: 270,
        height: 45,
        backgroundColor: '#4949E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    secondButton:{
        alignSelf:'center',
        marginTop: 25,
        width: 270,
        height: 45,
        backgroundColor: '#65B3FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },

    buttonText: {
        fontSize: 16,
        fontFamily: 'Rubik_500Medium',
        color: '#FFF',
    },
});

export default styles;
