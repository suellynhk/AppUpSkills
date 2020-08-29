import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
    },

    indication:{
        flex: 1,
        padding: 25,
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
    },

    center: {
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },

    colleaguesIcon:{
        width: 90,
        height: 90,
    },
    
    textHeader: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Rubik_700Bold',
        textAlign: 'center'
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
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4949E7',
    },

    button:{
        marginTop: 30,
        alignItems: 'flex-end',
    },

    submitButton: {
        width: 150,
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




})

export default styles;