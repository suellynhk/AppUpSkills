import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#FFF',
    },

    insideBox:{
        flex: 1,
        marginTop: -40,
        borderRadius: 20,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        },

    labelText: {
        alignSelf:'center',
        marginBottom: 30,
        marginTop: 40,
        fontSize: 20,
        fontFamily: 'Rubik_700Bold',
    },

    carouselContainer: {
        height: '100%',
        width: '100%'
    },
   
});

export default styles;