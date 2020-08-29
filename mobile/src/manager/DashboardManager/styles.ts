import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
        minHeight: 850,
    },

    insideBox:{
        flex: 1,
        marginTop: -40,
        padding: 25,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center', 
    },

    dashboardIcon: {
        marginTop: 10,
        marginBottom: 20,
        width: 90,
        height: 90,
    },

    labelText: {
        marginBottom: 20,
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold',
    },
   
});

export default styles;