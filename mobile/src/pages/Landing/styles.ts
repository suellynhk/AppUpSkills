import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        width: 400,
        height: 110,
        alignItems: 'flex-start',
    },

    textHeader:{
        fontSize: 28,
        fontFamily: 'Dosis_700Bold',
        color: '#FFF',
        lineHeight: 30,
        margin: 20
    },

    container:{
        backgroundColor: '#4949E7',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    insideBox: {
        width: 350,
        height: 640,
        borderRadius: 8,
        backgroundColor: '#F8F8FF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    landingImg: {
        marginLeft: 8,
        width: 150,
        height: 150,
    },

    landingText:{
        marginTop: 50,
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Rubik_400Regular' 
    },

    landingQuestion: {
        marginTop: 20,
        fontSize: 18,
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
        fontSize: 15,
        fontFamily: 'Rubik_700Bold',
        color: '#FFF',
    }

  });

export default styles;
  