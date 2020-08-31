import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 70,
        backgroundColor: '#F8F8FF',
    },

    textHeader:{
        fontSize: 22,
        fontFamily: 'Dosis_700Bold',
        color: '#4949E7',
        lineHeight: 25,
    },

    container:{
        padding: 50,
        flex: 1,
        backgroundColor: '#4949E7',
        alignItems: 'center',
        justifyContent: 'center',
    },

    insideBox: {
        width: '100%',
        height: 'auto',
        borderRadius: 8,
        backgroundColor: '#F8F8FF',
        padding: 30,
    },

    landingImg: {
        alignSelf: 'center',
        marginLeft: 8,
        width: 100,
        height: 100,
    },

    landingText:{
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 16,
        lineHeight: 30,
        fontFamily: 'Rubik_400Regular' 
    },

    landingQuestion: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 16,
        justifyContent: 'flex-start',
        fontFamily:'Rubik_500Medium'
    },

    buttonsContainer: {
        alignSelf: 'center',
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
  