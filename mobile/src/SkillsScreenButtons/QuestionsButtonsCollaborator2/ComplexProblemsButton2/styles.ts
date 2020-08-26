import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        padding: 25,
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },

    titleText:{
        marginTop: 20,
        marginBottom: 10 ,
        fontSize: 20,
        fontFamily: 'Rubik_500Medium',
    },

    descriptionText:{
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Rubik_400Regular',
        textAlign: 'justify'
    },

    questionText: {
        marginTop: 30,
        marginBottom: 20,
        fontSize: 15,
        lineHeight: 20,
        fontFamily: 'Rubik_400Regular',
        textAlign: 'justify'
    },

    bottomButton: {
        marginTop: 40,
        width: '100%',
       alignItems: 'center',
    },


    button: {
        width: 250,
        height: 45,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4949E7',
    },

    secondButton:{
        marginTop: 20,
        width: 250,
        height: 45,
        borderRadius: 8,
        backgroundColor: '#65B3FF',
        alignItems: 'center',
        justifyContent: 'center'

    },

    buttonText:{
        fontSize: 14,
        fontFamily: 'Rubik_500Medium',
        color: '#FFF'
    },

});

export default styles;