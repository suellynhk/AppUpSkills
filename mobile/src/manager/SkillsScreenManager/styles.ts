import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    insideBox:{
        marginTop: -40,
        borderRadius: 20,
        padding: 35,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40%',
    },

    chooseImg:{
        marginBottom: 30,
        width: 90,
        height: 90
    },

    textMainScreen: {
        marginBottom: 20,
        fontSize: 18,
        fontFamily: 'Rubik_700Bold'
    },

    checkBoxContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },

    buttonContainer:{
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    button: {
        borderRadius: 8,
        marginTop: 40,
        marginBottom: 30,
        width: 150,
        height: 45,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton:{
        fontSize: 18,
        fontFamily: 'Rubik_500Medium',
        alignItems: 'flex-end',
        color:'#FFF'
    },
    
    skillsTitle: {
        fontSize: 14,
        fontFamily: 'Rubik_500Medium',
        alignItems: 'flex-start',
    },
});

export default styles;