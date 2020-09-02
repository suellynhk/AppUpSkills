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
        marginBottom: 20,
        marginTop: 30,
        fontSize: 18,
        fontFamily: 'Rubik_500Medium',
    },

    carouselContainer: {
        height: '100%',
        width: '100%'
    },

   
});

export default styles;