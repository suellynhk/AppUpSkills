import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        flex: 1,
        padding: 30,
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
        width: '100%',
        padding: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    button: {
        marginTop: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    rightButtonImg:{
        width: 50,
        height: 50,
    },

});

export default styles;