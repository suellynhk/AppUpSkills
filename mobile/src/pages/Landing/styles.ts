import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 110,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 30,
        backgroundColor: '#4949E7',
    },

    textHeader:{
        fontSize: 25,
        fontFamily: 'Dosis_700Bold',
        color: '#FFF',
        lineHeight: 30,
    },

    container:{
        flex: 1,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        height: 'auto'
    },

    insideBox: {
        width: 'auto',
        height: 'auto',
        borderRadius: 8,
        backgroundColor: '#F8F8FF',
        alignItems: 'center',
        padding: 30,
    },

    landingImg: {
        marginLeft: 8,
        width: 120,
        height: 120,
    },

    landingText:{
        marginTop: 40,
        fontSize: 18,
        lineHeight: 30,
        fontFamily: 'Rubik_400Regular' 
    },

    landingQuestion: {
        marginTop: 20,
        fontSize: 16,
        justifyContent: 'flex-start',
        fontFamily:'Rubik_500Medium'
    },

    buttonsContainer: {
        marginTop: 20,
        justifyContent: "center"
    },

    yesButton: {
        width: 200,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    
    noButton: {
        marginTop: 20,
        width: 200,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#65B3FF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textButton: {
        fontSize: 14,
        fontFamily: 'Rubik_700Bold',
        color: '#FFF',
    }

  });

export default styles;
  