import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    formCreateAccount:{
        flex: 1,
        marginTop: -40,
        padding: 35,
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
        marginTop: 15,
        fontFamily: 'Rubik_700Bold',
    },

    textLabel: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 5,
        fontFamily: 'Rubik_400Regular'
    },

    input: {
        width: '100%',
        height: 40,
        paddingLeft: 10,
        paddingTop: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
        fontSize: 16,
    },
    
    pickerBox:{
        height: 40, 
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
    },

    picker: {
        height: 45, 
        width: "100%",
    },

    button:{
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'flex-end'
    },

    submitButton: {
        width: 155,
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