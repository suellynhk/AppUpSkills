import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        flex: 1,
        marginTop: -40,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignContent: 'center',
    },

    alignBox:{
        alignItems:'center',
    },

    videoIcon:{
        marginTop: 20,
        width: 90,
        height: 90
    },

    labelText:{
        fontFamily: 'Rubik_500Medium',
        marginTop: 20,
        fontSize: 18,
    },

    microlearningText:{
        fontFamily: 'Rubik_400Regular',
        marginBottom: 20,
        margin: 10,
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'justify'
    },

    rectButton:{
        borderRadius: 8, 
        backgroundColor: '#4949E7',
        marginTop: 30,
        height: 45,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        fontFamily: 'Rubik_500Medium',
        color: '#fff',
        fontSize: 14,
    },

});

export default styles;