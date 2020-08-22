import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    formCreateAccount:{
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },

    center: {
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },

    registrationIcon:{
        width: 90,
        height: 90,
    },
    
    textHeader: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 15,
        fontFamily: 'Rubik_700Bold',
    },

    textLabel: {
        fontSize: 16,
        marginTop: 15,
        marginLeft: 35,
        marginBottom: 5,
        fontFamily: 'Rubik_400Regular'
    },

    input: {
        marginLeft: 35,
        paddingLeft: 10,
        width: 340,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        fontFamily: 'Rubik_400Regular'
    },
    
    pickerBox:{
        marginLeft: 35,
        paddingLeft: 3,
        height: 40, 
        width: 340,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
    },

    picker: {
        height: 45, 
        width: 340,
    },

    button:{
        margin: 20,
        marginRight: 40,
        alignItems: 'flex-end'
    },

    submitButton: {
        marginTop: 20,
        width: 200,
        height: 45,
        backgroundColor:'#4949E7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    submitButtonText: {
        fontSize: 16,
        fontFamily: 'Rubik_700Bold',
        color: '#FFF'
    }
});

export default styles;