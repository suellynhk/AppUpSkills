import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
 
    container:{
        height: 140,
        backgroundColor: '#4949E7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textHeader:{
        marginLeft: 20,
        paddingBottom: 10,
        fontSize: 18,
        lineHeight: 20,
        fontFamily: 'Dosis_700Bold',
        color: '#FFF',
        maxWidth: 60,

    },

    backIcon:{
        paddingBottom: 10,
        width: 45,
        height: 50,
        justifyContent: 'center'

    },
    backIconImg:{ 
        width: 20,
        height: 20,
    }

});

export default styles;