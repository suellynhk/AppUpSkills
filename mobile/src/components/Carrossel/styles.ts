import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container: { 
      flex:1,
      backgroundColor: '#E32',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    carouselItemContainer:{
      height: 300,
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#333',
      borderRadius: 8,
      padding: 20,
      
    },
  
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFF',
    },
  
    carouselImg:{
      marginTop: 10,
      width: 206,
      height: 150,
      borderRadius: 8
    },
  
  });

  export default styles;