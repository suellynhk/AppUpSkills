import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{ 
        flex: 1,
        marginTop: -40,
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
        fontSize: 20,
        fontFamily: 'Rubik_700Bold'
    },

    textValidation:{
        marginTop: 22,
        marginLeft: 22,
        marginRight: 22,
        fontSize: 16,
        fontFamily: 'Rubik_400Regular',
        textAlign: 'justify'
    },

    switchContainer:{
        marginLeft: 20,
        marginRight: 20,
        width: 370,
    },

    name:{
        marginTop: 30,
        marginBottom: 10,
        fontSize: 18,
        color: '#333',
        fontFamily: 'Rubik_500Medium'
    },

    nameIndicated: {
        fontSize: 18,
        fontFamily: 'Rubik_400Regular'
    },
    
    box: {
        margin: 15,
        width: 340,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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