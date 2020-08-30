import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: { 
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    carouselItemContainer:{
      height: 420,
      alignItems: 'center',
      backgroundColor: '#4949E7',
      borderRadius: 8,
      padding:10
      
    },
  
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFF',
    },
  
    carouselImg:{
      marginTop: 15,
      width: '85%',
      height: '85%',
      borderRadius: 8
    },
  
  });

  export default styles;