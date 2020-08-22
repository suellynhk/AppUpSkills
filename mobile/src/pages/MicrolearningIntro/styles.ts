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

    videoIcon:{
        marginTop: 20,
        width: 90,
        height: 90
    },

    labelText:{
        fontFamily: 'Rubik_700Bold',
        marginTop: 20,
        fontSize: 20,
    },

    microlearningText:{
        fontFamily: 'Rubik_400Regular',
        marginTop: 20,
        marginBottom: 20,
        margin: 10,
        fontSize: 18,
        textAlign: 'justify'
    },

    button: {
        width: 320,
        alignItems: 'flex-end'
    },

    rightIcon: {
        position:'relative',
        marginTop: 140,
        width: 50,
        height: 50
    },

});

export default styles;