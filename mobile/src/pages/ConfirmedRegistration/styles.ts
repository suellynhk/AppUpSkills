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

    confirmationText: {
        marginTop: 150,
        fontSize: 18,
        fontFamily: 'Rubik_700Bold'
    },

    confirmationIcon: {
        margin: 50,
        width: 100,
        height: 100
    },

    linkButton: {
        fontSize: 18,
        textDecorationLine: 'underline',
        color: '#4169E1',
        fontFamily: 'Rubik_400Regular'
    },
});

export default styles;