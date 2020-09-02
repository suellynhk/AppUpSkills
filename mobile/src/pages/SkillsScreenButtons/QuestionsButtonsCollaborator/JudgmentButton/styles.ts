import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        flex: 1,
        padding: 25,
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },

    titleText:{
        marginTop: 20,
        marginBottom: 10 ,
        fontSize: 18,
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

    comment:{
        marginTop: 40,
        fontSize: 16,
        fontFamily: 'Rubik_500Medium',
        textAlign: 'justify',
    },
        
    input: {
        padding: 10,
        marginTop: 10,
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        backgroundColor: '#FFF',
        fontFamily: 'Rubik_400Regular'
    },
        
});

export default styles;