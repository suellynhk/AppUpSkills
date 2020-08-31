import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        flex:1,
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
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonImg:{ 
        height: 50,
        width: 50,
        },

    rightButtonImg:{
        width: 50,
        height: 50,
    },

    recButton:{
        width: 100,
        height: 50,
        backgroundColor: '#4949E7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },

    textButton:{
        fontSize: 15,
        color: '#FFF',
        fontFamily: 'Rubik_500Medium',
    },


});

export default styles;