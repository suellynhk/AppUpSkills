import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    carouselItemContainer:{
      height: 500,
      alignItems: 'center',
      backgroundColor: '#4949E7',
      borderRadius: 8,
      padding:15
      
    },
  
    title: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#FFF',
    },
  
    carouselImg:{
      marginTop: 15,
      width: '100%',
      height: '80%',
      borderRadius: 8
    },

    buttons:{
      borderRadius: 8,
      marginTop: 15,
      width: '100%',
      height: 45,
      backgroundColor: '#65B3FF',
      alignItems: 'center',
      justifyContent: 'center',
  },

  textButton:{
      fontSize: 13,
      color: '#FFF',
      fontFamily: 'Rubik_500Medium'
  },
  
  });

  export default styles;