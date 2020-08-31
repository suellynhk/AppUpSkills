import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{ 
        flex: 1,
        marginTop: -40,
        padding: 25,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },

    anotherBox:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    validationImg:{
        margin: 40,
        width: 90,
        height: 90
    },

    textHeader: {
        fontSize: 18,
        fontFamily: 'Rubik_500Medium'
    },

    textValidation:{
        marginTop: 22,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        textAlign: 'justify'
    },

    switchContainer:{
        width: '100%',
    },

    name:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 17,
        fontFamily: 'Rubik_500Medium'
    },

    nameIndicated: {
        fontSize: 15,
        fontFamily: 'Rubik_500Medium'
    },
    
    box: {
        margin: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    switchBox: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    switches: {
        transform: [
            { scaleX: 1.6 }, 
            { scaleY: 1.6 }]
    },

    buttonsContainer: {
        marginRight: 15,
        marginTop: 30,
        marginBottom: 40,
        alignItems:'flex-end'
    },

    button: {
        borderRadius: 8,
        width: 150,
        height: 45,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    textButton: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'Rubik_500Medium'
    },

});

export default styles;