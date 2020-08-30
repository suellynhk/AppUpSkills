import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        flex:1,
        marginTop: -40,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },

    videoIcon:{
        alignSelf: 'center',
        marginTop: 20,
        width: 90,
        height: 90
    },

    labelText:{
        alignSelf: 'center',
        fontFamily: 'Rubik_700Bold',
        marginTop: 20,
        fontSize: 20,
    },

    microlearningText:{
        fontFamily: 'Rubik_400Regular',
        marginTop: 20,
        marginBottom: 20,
        margin: 10,
        fontSize: 17,
        textAlign: 'justify'
    },

    button: {
        width: 320,
        alignItems: 'flex-end'
    },

    rightIcon: {
        position:'relative',
        marginTop: 100,
        width: 50,
        height: 50
    },

});

export default styles;